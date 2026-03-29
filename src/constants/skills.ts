import type { IconType } from 'react-icons';

import { FaAws } from 'react-icons/fa';
import {
  SiAntdesign,
  SiBlockchaindotcom,
  SiCss,
  SiCypress,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJenkins,
  SiJest,
  SiJira,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiSentry,
  SiSolidity,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { TbSeo } from 'react-icons/tb';

export interface SkillItem {
  name: string;
  icon: IconType;
}

export const SKILLS: SkillItem[] = [
  // Languages & Core
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'SCSS', icon: SiSass },
  { name: 'Solidity', icon: SiSolidity },

  // Frontend
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Redux', icon: SiRedux },
  { name: 'Ant Design', icon: SiAntdesign },
  { name: 'Tailwind CSS', icon: SiTailwindcss },

  // Backend & APIs
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'REST APIs', icon: SiSwagger },

  // Databases
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },

  // Testing
  { name: 'Jest', icon: SiJest },
  { name: 'Cypress', icon: SiCypress },

  // DevOps & Cloud
  { name: 'Git', icon: SiGit },
  { name: 'Docker', icon: SiDocker },
  { name: 'AWS', icon: FaAws },
  { name: 'Jenkins', icon: SiJenkins },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Sentry', icon: SiSentry },
  { name: 'Linux', icon: SiLinux },

  // Tools & Other
  { name: 'Figma', icon: SiFigma },
  { name: 'Jira', icon: SiJira },
  { name: 'SEO', icon: TbSeo },
  { name: 'Blockchain', icon: SiBlockchaindotcom },
];
