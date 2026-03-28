export interface SkillItem {
  name: string;
  category: string;
}

export const SKILLS: SkillItem[] = [
  // Languages
  { name: 'TypeScript', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'HTML / CSS', category: 'Markup' },
  { name: 'SCSS', category: 'Styling' },
  { name: 'GraphQL', category: 'API' },
  { name: 'Solidity', category: 'Language' },

  // Frameworks & Libraries
  { name: 'React', category: 'Library' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Redux', category: 'State Management' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Express.js', category: 'Backend' },

  // UI Libraries
  { name: 'Ant Design', category: 'UI Library' },
  { name: 'Tailwind CSS', category: 'UI Library' },

  // Testing
  { name: 'Jest', category: 'Testing' },
  { name: 'Cypress', category: 'Testing' },

  // Databases
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },

  // DevOps & Cloud
  { name: 'Git', category: 'DevOps' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Jenkins', category: 'CI/CD' },
  { name: 'Vercel', category: 'Hosting' },
  { name: 'Sentry', category: 'Monitoring' },

  // Design & Collaboration
  { name: 'Figma', category: 'Design' },
  { name: 'Jira', category: 'Project Management' },

  // Other
  { name: 'REST APIs', category: 'Architecture' },
  { name: 'SEO', category: 'Web' },
  { name: 'Blockchain', category: 'Web3' },
  { name: 'Linux', category: 'OS' },
];
