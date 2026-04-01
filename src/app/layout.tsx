import type { Metadata, Viewport } from 'next';

import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ThemeProvider from '@/providers/ThemeProvider';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hamdyx.dev'),
  title: 'Ahmed Hamdy | Software Engineer — React, TypeScript & Frontend Architecture',
  description:
    'Ahmed Hamdy is a Software Engineer with 6+ years of experience building performant, scalable web applications with React, TypeScript, Next.js, and Node.js. Specializing in frontend architecture, fintech dashboards, and travel platforms.',
  keywords: [
    'Ahmed Hamdy',
    'Software Engineer',
    'Frontend Developer',
    'React Developer',
    'TypeScript',
    'Next.js',
    'Node.js',
    'JavaScript',
    'Web Developer',
    'Frontend Architecture',
    'Cairo',
    'Egypt',
    'Portfolio',
    'Fintech',
    'Travel Tech',
    'Full Stack Developer',
    'hamdyx',
  ],
  authors: [{ name: 'Ahmed Hamdy', url: 'https://hamdyx.dev' }],
  creator: 'Ahmed Hamdy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hamdyx.dev',
    siteName: 'Ahmed Hamdy — Portfolio',
    title: 'Ahmed Hamdy | Software Engineer',
    description: 'Software Engineer with 6+ years of experience building scalable web applications with React, TypeScript, and modern frontend architecture.',
    images: [
      {
        url: '/profile-pic.webp',
        width: 1200,
        height: 630,
        alt: 'Ahmed Hamdy — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Hamdy | Software Engineer',
    description: 'Software Engineer with 6+ years of experience building scalable web applications with React, TypeScript, and modern frontend architecture.',
    creator: '@ma_niguh',
    images: ['/profile-pic.webp'],
  },
  alternates: {
    canonical: 'https://hamdyx.dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4f46e5' },
    { media: '(prefers-color-scheme: dark)', color: '#060e20' },
  ],
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme-preference');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ahmed Hamdy',
              url: 'https://hamdyx.dev',
              jobTitle: 'Software Engineer',
              worksFor: { '@type': 'Organization', name: 'Secret Escapes' },
              sameAs: ['https://github.com/Hamdyx', 'https://linkedin.com/in/hamdyx', 'https://x.com/ma_niguh'],
              knowsAbout: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Frontend Architecture'],
              address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main role="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
