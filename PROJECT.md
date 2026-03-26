# PROJECT: Corey Eudell Personal Site

*This file lives in the repo root and describes the project for any agent that enters the context.*

## 1. Quick Start
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

## 2. Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 4
- Database: SQLite (via better-sqlite3 + Drizzle ORM)
- Deployment: Vercel

## 3. Architecture
Mobile-first personal portfolio site. Next.js App Router with:
- `src/app/` — Pages and layouts (file-based routing)
- `src/app/api/` — API routes (contact form, project data)
- `src/components/` — Reusable UI components
- `src/lib/` — Utilities, database client, config
- `src/data/` — Static data (projects, content)
- `public/` — Static assets (images, fonts)

## 4. Design Philosophy
Absurdist — built because it wants to exist, not because it matters.
Mobile-first. Dark mode default. Typography-forward.
