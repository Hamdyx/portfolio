import type { MetadataRoute } from 'next';

const AI_TRAINING_CRAWLERS = [
  'GPTBot',
  'ClaudeBot',
  'anthropic-ai',
  'Claude-Web',
  'CCBot',
  'Google-Extended',
  'Applebot-Extended',
  'PerplexityBot',
  'Bytespider',
  'meta-externalagent',
  'Diffbot',
  'cohere-ai',
  'AI2Bot',
  'omgili',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: AI_TRAINING_CRAWLERS,
        disallow: '/',
      },
    ],
    sitemap: 'https://hamdyx.dev/sitemap.xml',
  };
}
