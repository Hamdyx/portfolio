<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# hamdyx — Ahmed Hamdy's Portfolio

## Tech Stack

- **Framework:** Next.js 16 (App Router only — no Pages Router)
- **Language:** TypeScript (strict mode)
- **Package Manager:** Yarn 4.13.0 (Berry, via Corepack)
- **UI Library:** Ant Design 6
- **Styling:** CSS Modules (no Tailwind, no styled-components)
- **Import Alias:** `@/*` → `./src/*`
- **React Compiler:** Enabled

## Project Structure

All source code lives under `src/`. The app uses the Next.js App Router (`src/app/`).

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

`@ant-design/nextjs-registry` wraps children in the root layout for SSR style extraction. Do not remove `<AntdRegistry>` from `layout.tsx`.

### Styling

- Use CSS Modules (`.module.css`) for custom component styles.
- Use Ant Design's `ConfigProvider` theme tokens for design system overrides.
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
