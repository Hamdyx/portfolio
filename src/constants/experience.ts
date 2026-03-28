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
      'Led the adoption and customization of AI developer tools, including implementing Copilot custom instructions and configuring the code review agent, enhancing engineering productivity and code quality standards across the team while increasing unit test coverage to 100%.',
    current: true,
  },
  {
    title: 'Frontend Engineer',
    company: 'RasMal',
    period: 'Nov 2022 — Sep 2025',
    description:
      'Built complex financial dashboards and equity management tools for a SaaS platform serving startups and investors. Implemented protected and permission-based routing, and reduced bundle size by 60% through code splitting and lazy loading.',
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Taqneen Solutions',
    period: 'Jul 2022 — Nov 2022',
    description:
      'Coordinated cross-functionally with backend and DevOps engineers to architect and deliver new product features and REST API integrations for enterprise client applications.',
  },
  {
    title: 'Frontend Developer',
    company: 'Uniparticle',
    period: 'Mar 2022 — Jul 2022',
    description:
      "Rebuilt Aman Microfinance's legacy WordPress website from the ground up using TypeScript, React, Redux, and SCSS, delivering a modern, performant web experience for a company operating across 233+ branches in Egypt.",
  },
  {
    title: 'JavaScript Developer',
    company: 'Freelance',
    period: 'Apr 2019 — Mar 2022',
    description:
      'Delivered responsive websites, landing pages, and interactive features for international clients across various industries, translating functional specifications into polished, production-ready code.',
  },
];
