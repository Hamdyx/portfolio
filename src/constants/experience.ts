export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    company: 'Secret Escapes',
    period: 'Feb 2025 — Present',
    description:
      'Built and shipped features across a Yarn 4 monorepo of 3 React + TypeScript SPAs (Vite, Apollo Client, Ant Design) serving internal supply, partner, and provider admin tools. Authored custom Copilot instructions and specialized agents (implement, test, code-review, refactor, docs) enabling agentic PR workflows for end-to-end production delivery. Maintained shared component and utility libraries with WCAG-compliant accessibility patterns and 100% unit test coverage, with staging and production releases via Jenkins CI/CD.',
    current: true,
  },
  {
    title: 'Frontend Engineer',
    company: 'RasMal',
    period: 'Nov 2022 — Sep 2025',
    description:
      'Led a major refactor of core React and TypeScript modules, modernizing component structure and replacing legacy state patterns, improving load times by ~20%. Restructured routing with protected routes and route-level lazy loading (code-splitting), cutting initial bundle size by ~60% and improving Time-to-Interactive. Collaborated with backend engineers, designers, and product managers to translate Figma designs into reusable, accessible React components integrated with REST APIs.',
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Taqneen Solutions',
    period: 'Jul 2022 — Nov 2022',
    description:
      'Designed and shipped 5 product features using React, TypeScript, and Redux Form, including dynamic form builders driven by JSON schema configurations. Coordinated cross-functionally with backend and DevOps engineers to deliver REST API integrations for enterprise client applications.',
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Uniparticle',
    period: 'Mar 2022 — Jul 2022',
    description:
      "Rebuilt Aman Microfinance's legacy WordPress site using TypeScript, React, Redux, and SCSS, delivering a modern web presence for a leading microfinance institution operating across 233+ branches in Egypt. Implemented on-page SEO best practices including semantic HTML, meta tags, and structured data, lifting target keywords into top-5 Google search rankings.",
  },
  {
    title: 'JavaScript Developer',
    company: 'Freelance',
    period: 'Apr 2019 — Mar 2022',
    description:
      'Delivered responsive websites, landing pages, and interactive features for international clients across various industries, translating functional specifications into polished, production-ready code.',
  },
];
