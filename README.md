# hamdyx

Personal portfolio website for **Ahmed Hamdy** — Software Engineer with 6+ years of experience building web applications across fintech, travel, and enterprise domains.

## Tech Stack

| Category        | Technology                                |
| --------------- | ----------------------------------------- |
| Framework       | Next.js 16 (App Router)                   |
| Language        | TypeScript (strict mode)                  |
| UI Library      | Ant Design 6                              |
| Styling         | CSS Modules                               |
| Fonts           | Geist Sans & Geist Mono (via `next/font`) |
| Email           | Resend                                    |
| Analytics       | Vercel Analytics                          |
| Package Manager | Yarn 4.13.0 (Berry, via Corepack)         |
| React Compiler  | Enabled                                   |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # POST handler — sends email via Resend
│   ├── layout.tsx          # Root layout (AntdRegistry + ConfigProvider + fonts)
│   ├── page.tsx            # Home — composes all section components
│   ├── globals.css         # Global resets and base styles
│   └── page.module.css
├── components/
│   ├── Navbar/             # Fixed nav with mobile drawer
│   ├── Hero/               # Full-viewport intro with socials
│   ├── About/              # Bio, location, email, resume download
│   ├── Experience/         # Timeline of work history
│   ├── Skills/             # Categorized tech stack grid
│   ├── Projects/           # Project cards with demo/GitHub links
│   ├── Contact/            # Contact form with Resend email submission
│   └── Footer/             # Social links and copyright
├── config/
│   └── theme.ts            # Ant Design theme tokens
├── constants/
│   ├── personal.ts         # Name, tagline, social handles
│   ├── experience.ts       # Work history entries
│   ├── skills.ts           # Skills with categories
│   └── projects.ts         # Project titles, descriptions, URLs
├── hooks/
│   └── useTheme.ts         # Theme hook
└── providers/
    ├── ThemeContext.ts      # Theme context definition
    └── ThemeProvider.tsx    # Theme context provider
```

Each component follows the pattern: `ComponentName/index.tsx` + `ComponentName/ComponentName.module.css`.

## Getting Started

**Prerequisites:** Node.js 18+ and Corepack enabled.

```bash
# Enable Corepack (activates the pinned Yarn version)
corepack enable

# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command      | Description            |
| ------------ | ---------------------- |
| `yarn dev`   | Start dev server       |
| `yarn build` | Production build       |
| `yarn start` | Serve production build |
| `yarn lint`  | Run ESLint             |

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable            | Description                                                      |
| ------------------- | ---------------------------------------------------------------- |
| `RESEND_API_KEY`    | API key from [resend.com](https://resend.com/api-keys)           |
| `RESEND_FROM_EMAIL` | Verified sender address (or `onboarding@resend.dev` for testing) |
| `CONTACT_TO_EMAIL`  | Email where contact form messages are delivered                  |

## Deployment

Hosted on **Vercel**. Add the same environment variables in Vercel → Settings → Environment Variables.

## License

Private — not open source.
