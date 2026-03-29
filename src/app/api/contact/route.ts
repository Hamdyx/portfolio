import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = (await request.json()) as ContactFormData;
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replaceAll('\n', '<br />')}</p>
      `,
    });

    if (error) {
      return Response.json({ error: 'Failed to send message.' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
