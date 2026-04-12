<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# hamdyx — Ahmed Hamdy's Portfolio

## Mandatory Pre-Flight Checks

Before writing or modifying ANY code, the agent MUST:

1. **Verify API currency** — check official docs or `node_modules/<pkg>/` for the exact version installed (see `package.json`). Never rely on training data for API shapes.
2. **Scan for deprecations** — run `yarn build` after changes and treat every warning as a blocker. If a component, prop, hook, or function is deprecated, use its documented replacement.
3. **Read `node_modules/next/dist/docs/`** — Next.js 16 has breaking changes vs. 15/14. Always validate routing, metadata, caching, and config APIs against the bundled docs.
4. **Consult Ant Design 6 changelog** — Ant Design 6 removed or renamed several v5 APIs. When in doubt, verify against `node_modules/antd/es/` exports.

## Code Quality Principles (Always Apply)

These are **defaults** — follow them on every change without being asked:

- **Clean code** — small, single-responsibility functions. Descriptive names. No dead code. No commented-out code.
- **TypeScript strict mode** — no `any`, no `@ts-ignore`, no non-null assertions (`!`) unless truly unavoidable. Prefer narrowing and type guards.
- **No manual memoization** — React Compiler is enabled. Never add `useMemo`, `useCallback`, or `React.memo`.
- **Semantic HTML** — use correct elements (`<nav>`, `<main>`, `<section>`, `<time>`, `<button>`, etc.). Add ARIA attributes only when native semantics fall short.
- **Accessibility** — all interactive elements must be keyboard-reachable, all images must have meaningful `alt` text (or `alt=""` / `aria-hidden` for decoration), form inputs need labels.
- **No over-engineering** — don't add abstractions, helpers, or error handling beyond what is needed. Don't wrap Ant Design components unnecessarily.
- **Security** — validate and sanitize at system boundaries. Follow OWASP Top 10. Never expose secrets in client code.

## Deprecation & Version Awareness

| Package                       | Installed | Key Notes                                                                                                                                                 |
| ----------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `next`                        | 16.2.1    | App Router only. No Pages Router. `next/font/google` for fonts. Turbopack dev server.                                                                     |
| `react` / `react-dom`         | 19.2.4    | React 19 — `use()`, Actions, `useFormStatus`, `useOptimistic` are stable. Class component lifecycle is legacy.                                            |
| `antd`                        | 6.3.4     | v6 — no v4/v5 deprecated APIs (`Form.create`, `Icon` from `antd`, `getFieldDecorator`). Destructure sub-components, don't use dot notation in App Router. |
| `@ant-design/icons`           | 6.1.1     | Named icon imports only. No default import.                                                                                                               |
| `@ant-design/nextjs-registry` | 1.3.0     | Single `<AntdRegistry>` in `ThemeProvider.tsx` only.                                                                                                      |
| `react-icons`                 | 5.6.0     | Tree-shakeable named imports (`react-icons/fa`, `react-icons/si`, etc.).                                                                                  |
| `resend`                      | 6.9.4     | Use `Resend` class constructor. Check for v6 API changes.                                                                                                 |
| `@vercel/analytics`           | 2.0.1     | `<Analytics />` component in layout.                                                                                                                      |
| `typescript`                  | 5.9.3     | Use modern syntax: `satisfies`, `using`, template literal types where appropriate.                                                                        |

**When unsure about any API:** check the package's `node_modules/<pkg>/` types or README before writing code. Do NOT guess or rely on memory.

## Tech Stack

- **Framework:** Next.js 16 (App Router only — no Pages Router)
- **Language:** TypeScript (strict mode)
- **Package Manager:** Yarn 4.13.0 (Berry, via Corepack)
- **UI Library:** Ant Design 6 (`antd`, `@ant-design/icons`, `@ant-design/nextjs-registry`)
- **Styling:** CSS Modules (no Tailwind, no styled-components)
- **Email:** Resend (`resend`) — contact form emails
- **Analytics:** Vercel Analytics (`@vercel/analytics`)
- **Fonts:** Geist Sans & Geist Mono via `next/font/google`
- **Import Alias:** `@/*` → `./src/*`
- **React Compiler:** Enabled

## Project Structure

All source code lives under `src/`. The app uses the Next.js App Router (`src/app/`).

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # POST handler — sends email via Resend (rate-limited)
│   ├── layout.tsx          # Root layout — ThemeProvider, fonts, metadata, viewport, JSON-LD
│   ├── page.tsx            # Home page — composes all section components
│   ├── globals.css         # Global resets, theme variables (light + dark), base styles
│   ├── loading.tsx         # Skeleton loading state (Ant Design Skeleton)
│   ├── not-found.tsx       # Custom 404 page
│   ├── robots.ts           # robots.txt generation (points to sitemap)
│   ├── sitemap.ts          # sitemap.xml generation
│   ├── manifest.ts         # PWA web manifest
│   └── page.module.css
├── components/             # Each component: index.tsx + ComponentName.module.css
│   ├── Navbar/             # Fixed nav bar with mobile Drawer
│   ├── Hero/               # Full-viewport intro section
│   ├── About/              # Bio, details, resume download
│   ├── Experience/         # Ant Design Timeline of work history
│   ├── Skills/             # Categorized grid (Row/Col/Card)
│   ├── Projects/           # Project cards with demo/GitHub links
│   ├── Contact/            # Ant Design Form with Resend email submission
│   └── Footer/             # Social links and copyright
├── config/
│   └── theme.ts            # Ant Design ThemeConfig tokens (light + dark)
├── constants/              # All display data — edit these to update content
│   ├── personal.ts         # Name, tagline, subtitle, social handles, email, website
│   ├── experience.ts       # Work history (ExperienceItem[])
│   ├── skills.ts           # Skills with categories (SkillItem[])
│   └── projects.ts         # Projects with descriptions and URLs (ProjectItem[])
├── hooks/
│   └── useTheme.ts         # Theme hook
└── providers/
    ├── ThemeContext.ts      # Theme context definition
    └── ThemeProvider.tsx    # Theme provider (AntdRegistry + ConfigProvider)
```

## Architecture Notes

- **All components use `'use client'`** — required because Ant Design uses React hooks internally.
- **Data-driven UI** — components read from `src/constants/`. To update content (projects, skills, experience), edit the constants files only.
- **Single-page layout** — `page.tsx` composes sections in order: Navbar → Hero → About → Experience → Skills → Projects → Contact → Footer.
- **SSR style extraction** — `@ant-design/nextjs-registry` wraps `ConfigProvider` inside `ThemeProvider.tsx`. Do not remove `<AntdRegistry>` from `ThemeProvider.tsx`. Do NOT add a second `<AntdRegistry>` in `layout.tsx`.
- **Contact form** — submits via `POST /api/contact` Route Handler, which sends email through Resend. Rate-limited to 3 requests per IP per 60 seconds. Requires `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL` environment variables.
- **SEO** — `layout.tsx` exports rich `metadata` (Open Graph, Twitter Cards, JSON-LD structured data) and `viewport`. Generated `robots.ts`, `sitemap.ts`, and `manifest.ts` live in `src/app/`.
- **Security headers** — configured in `next.config.ts` via `headers()`: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`.
- **Domain** — deployed at [hamdyx.dev](https://hamdyx.dev) via Vercel.

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

### Common Pitfalls (Do NOT)

- Do NOT use `next/head` — use the `metadata` export or `generateMetadata` in App Router.
- Do NOT use `getServerSideProps` / `getStaticProps` — these are Pages Router only.
- Do NOT import from `antd/lib/...` — use `antd` or `antd/es/...` only.
- Do NOT use `<Image>` with `layout` prop — use `width`/`height` or `fill` (Next.js 16 Image API).
- Do NOT add `"use server"` to files that don't contain Server Actions.
- Do NOT create barrel files (`index.ts` re-exports) — import directly from the source module.
