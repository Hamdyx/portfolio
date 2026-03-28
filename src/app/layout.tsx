import type { Metadata } from 'next';

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
  title: 'Ahmed Hamdy | Software Engineer',
  description: 'Personal portfolio of Ahmed Hamdy — Software Engineer specializing in React, TypeScript, and modern frontend architecture.',
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
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
