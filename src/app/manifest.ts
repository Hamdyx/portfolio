import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ahmed Hamdy — Software Engineer',
    short_name: 'Ahmed Hamdy',
    description: 'Software Engineer with 6+ years of experience building scalable web applications with React, TypeScript, and modern frontend architecture.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f9f9ff',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
