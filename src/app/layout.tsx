import type { Metadata } from 'next';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { Geist, Geist_Mono } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { theme } from '@/config/theme';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
