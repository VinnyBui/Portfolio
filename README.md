# Portfolio

Personal portfolio for Vinh Bui. Next.js 15 (App Router), React 19, Tailwind CSS 3, Motion, deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Where things live

- `src/app/` – routes (`/`, `/projects`, `/projects/[id]`) and global layout/styles
- `src/components/sections/` – page sections (hero, about, experience, projects)
- `src/components/layout/` – navbar, footer
- `src/components/ui/` – shared UI primitives
- `src/lib/experienceData.ts`, `src/lib/projectsData.ts` – **edit these to update experience and projects**
- `public/` – resume PDF and images
