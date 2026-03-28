export interface ProjectItem {
  title: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Secret Escapes',
    description:
      'A globally recognized members-only luxury travel platform operating across 15+ international markets. As part of the engineering team, I contribute to five internal partner-facing applications that power deal management, hotel onboarding, and content orchestration — serving over 20 million members worldwide.',
    demoUrl: 'https://www.secretescapes.com/',
  },
  {
    title: 'RasMal',
    description:
      'An all-in-one equity management platform that automates cap table administration, streamlines fundraising through scenario modeling and dynamic data rooms, and delivers company valuation reports. I engineered the frontend architecture powering complex financial dashboards, permission-based routing, and investor-facing reporting interfaces — reducing bundle size by 60% through strategic lazy loading.',
    demoUrl: 'https://www.rasmal.io/',
  },
  {
    title: 'Aman Microfinance',
    description:
      "A subsidiary of Raya Corporation and one of Egypt's largest microfinance institutions, serving small and micro enterprises through 233+ branches nationwide. I rebuilt the legacy WordPress site from the ground up using TypeScript, React, Redux, and SCSS — delivering a modern, high-performance web presence featuring online loan applications, an interactive branch locator, and mobile app integration.",
    demoUrl: 'https://amanmicrofinance.com/',
  },
  {
    title: 'Hegazy Group',
    description:
      "A fully integrated agricultural conglomerate established in 1981, encompassing five subsidiary companies across poultry, hatcheries, feed production, agriculture, and business solutions. I developed a corporate multi-sector web platform that showcases the group's diverse product catalog, company hierarchy, career portal, and news center — tailored for a professional B2B audience.",
    demoUrl: 'https://www.hg-egypt.com/',
  },
  {
    title: 'Coin Routes',
    description:
      'A real-time cryptocurrency market data application powered by WebSocket connections. Features live bid/ask price streaming, interactive candlestick charts, and a continuously updating order book — demonstrating proficiency in high-frequency data rendering, state management under rapid updates, and financial data visualization.',
    demoUrl: 'https://coin-routes-frontend-code-test.vercel.app/',
    githubUrl: 'https://github.com/Hamdyx/CoinRoutes-Frontend-Code-Test',
  },
  {
    title: 'Encryption Tool',
    description:
      'A cryptography utility that generates randomized secure passwords and applies cipher-based encryption with configurable key parameters. Built to demonstrate practical understanding of data protection principles including symmetric encryption, key derivation, and secure randomness generation.',
    demoUrl: 'https://hamdyx-encryption.netlify.app/',
    githubUrl: 'https://github.com/Hamdyx/Encryption',
  },
  {
    title: 'Weather App',
    description:
      'A responsive weather dashboard built with React and Node.js, styled using Chakra UI. Provides real-time weather forecasts, location-based lookups, and clean data visualization — showcasing API integration, responsive design, and component-driven architecture.',
    demoUrl: 'https://weathermania.vercel.app/',
    githubUrl: 'https://github.com/Hamdyx/Weather-App',
  },
  {
    title: 'Budgety',
    description:
      'A personal finance management application built with React and Node.js, featuring income and expense tracking, budget categorization, and visual spending breakdowns. Styled with Chakra UI for a clean, accessible interface focused on usability and clarity.',
    demoUrl: 'https://budgety-demo.vercel.app/',
    githubUrl: 'https://github.com/Hamdyx/Budgety',
  },
];
