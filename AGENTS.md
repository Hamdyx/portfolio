<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# hamdyx — Ahmed Hamdy's Portfolio

## Tech Stack

- **Framework:** Next.js 16 (App Router only — no Pages Router)
- **Language:** TypeScript (strict mode)
- **Package Manager:** Yarn 4.13.0 (Berry, via Corepack)
- **UI Library:** Ant Design 6 (`antd`, `@ant-design/icons`, `@ant-design/nextjs-registry`)
- **Styling:** CSS Modules (no Tailwind, no styled-components)
- **Fonts:** Geist Sans & Geist Mono via `next/font/google`
- **Import Alias:** `@/*` → `./src/*`
- **React Compiler:** Enabled

## Project Structure

All source code lives under `src/`. The app uses the Next.js App Router (`src/app/`).

```
src/
├── app/
│   ├── layout.tsx          # Root layout — AntdRegistry, ConfigProvider, fonts, metadata
│   ├── page.tsx            # Home page — composes all section components
│   ├── globals.css         # Global resets and base styles
│   └── page.module.css
├── components/             # Each component: index.tsx + ComponentName.module.css
│   ├── Navbar/             # Fixed nav bar with mobile Drawer
│   ├── Hero/               # Full-viewport intro section
│   ├── About/              # Bio, details, resume download
│   ├── Experience/         # Ant Design Timeline of work history
│   ├── Skills/             # Categorized grid (Row/Col/Card)
│   ├── Projects/           # Project cards with demo/GitHub links
│   ├── Contact/            # Ant Design Form with validation
│   └── Footer/             # Social links and copyright
├── config/
│   └── theme.ts            # Ant Design ThemeConfig tokens
└── constants/              # All display data — edit these to update content
    ├── personal.ts         # Name, tagline, subtitle, social handles, email
    ├── experience.ts       # Work history (ExperienceItem[])
    ├── skills.ts           # Skills with categories (SkillItem[])
    └── projects.ts         # Projects with descriptions and URLs (ProjectItem[])
```

## Architecture Notes

- **All components use `'use client'`** — required because Ant Design uses React hooks internally.
- **Data-driven UI** — components read from `src/constants/`. To update content (projects, skills, experience), edit the constants files only.
- **Single-page layout** — `page.tsx` composes sections in order: Navbar → Hero → About → Experience → Skills → Projects → Contact → Footer.
- **SSR style extraction** — `@ant-design/nextjs-registry` wraps children in the root layout. Do not remove `<AntdRegistry>` from `layout.tsx`.

## Conventions

### React Compiler

React Compiler is enabled — do NOT use manual `useMemo`, `useCallback`, or `React.memo`. The compiler handles memoization automatically at build time.

If Ant Design component behavior quirks arise, disable in `next.config.ts`:

```ts
reactCompiler: false,
```

### Ant Design in App Router

Destructure sub-components — dot notation does NOT work in App Router:

```tsx
// ✅ Correct
const { Text } = Typography;
<Text>Hello</Text>

// ❌ Broken in App Router
<Typography.Text>Hello</Typography.Text>
```

### Styling

- Use CSS Modules (`.module.css`) for custom component styles.
- Use Ant Design's `ConfigProvider` theme tokens (in `src/config/theme.ts`) for design system overrides.
- Primary color: `#4f46e5`. Background: `#f9f9ff`. Text: `#151c27`.
- Do NOT add Tailwind CSS or styled-components.

### Import Order (enforced by ESLint)

Imports must follow this order with blank lines between each group:

1. **Type imports** (`import type { ... }`) — all type-only imports regardless of source
2. **External packages** — `react`, `next`, `antd`, etc.
3. **Alias imports** — `@/*` paths
4. **Relative imports** — `./`, `../`

```tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import type { HomeProps } from '@/types/home';

import { ConfigProvider } from 'antd';
import Image from 'next/image';

import { Header } from '@/components/Header';
import { theme } from '@/config/theme';

import styles from './page.module.css';
```
