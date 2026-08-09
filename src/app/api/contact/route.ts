import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeField(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (trimmed === '' || trimmed.length > maxLength) return null;
  return trimmed;
}

function parseFormData(body: unknown): ContactFormData | null {
  if (typeof body !== 'object' || body === null) return null;
  const record = body as Record<string, unknown>;

  const name = sanitizeField(record.name, 100);
  const email = sanitizeField(record.email, 254);
  const subject = sanitizeField(record.subject, 150);
  const message = sanitizeField(record.message, 5000);

  if (!name || !email || !subject || !message) return null;
  if (!EMAIL_REGEX.test(email)) return null;

  return { name, email, subject, message };
}

function isHoneypotFilled(body: unknown): boolean {
  if (typeof body !== 'object' || body === null) return false;
  const { company } = body as Record<string, unknown>;
  return typeof company === 'string' && company.trim() !== '';
}

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_MAX_ENTRIES = 500;
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  for (const [key, timestamps] of ipTimestamps) {
    if (timestamps.every(timestamp => now - timestamp >= RATE_LIMIT_WINDOW_MS)) {
      ipTimestamps.delete(key);
    }
  }

  const timestamps = ipTimestamps.get(ip) ?? [];
  const recent = timestamps.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    ipTimestamps.set(ip, recent);
    return true;
  }

  recent.push(now);
  ipTimestamps.set(ip, recent);

  while (ipTimestamps.size > RATE_LIMIT_MAX_ENTRIES) {
    const oldest = ipTimestamps.keys().next().value;
    if (oldest === undefined) break;
    ipTimestamps.delete(oldest);
  }

  return false;
}

function getClientIp(request: Request): string {
  return (
    request.headers.get('cf-connecting-ip')?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request))) {
    return Response.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (isHoneypotFilled(body)) {
    return Response.json({ success: true });
  }

  const data = parseFormData(body);
  if (!data) {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error('Contact API: missing RESEND_API_KEY, RESEND_FROM_EMAIL, or CONTACT_TO_EMAIL');
    return Response.json({ error: 'Failed to send message.' }, { status: 500 });
  }

  const { name, email, subject, message } = data;

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${RESEND_FROM_EMAIL}>`,
      to: [CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Contact API: Resend send failed', error);
      return Response.json({ error: 'Failed to send message.' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact API: unexpected error', err);
    return Response.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
