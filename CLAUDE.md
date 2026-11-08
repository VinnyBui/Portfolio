# Portfolio - Project Context

## Overview
Vinh's portfolio website that showcase his work and experience.

## Commands

No test suite. `npm run build` fails on lint or type errors; `npx tsc --noEmit` is the quick typecheck.

## Architecture

Single-site Next.js 15 App Router portfolio (React 19, Tailwind 3, `motion`), deployed on Vercel (`@vercel/analytics` in the root layout). Path alias `@/*` → `src/*`.

- Routes: `/` composes `HeroSection`, `AboutSection`, `ExperienceSection`, `ProjectsDemoSection` inside `src/app/page.tsx`; `/projects` is the scrolling project list; `/projects/[id]` renders `ProjectContent` by looking up `id` in the `projects` array (unknown id shows a plain "Project not found" div).
- Content is plain TypeScript, not a CMS or database: `src/lib/experienceData.ts` (grouped by year) and `src/lib/projectsData.ts` (typed `Project` interface, string ids `"1"`, `"2"`, ...). Update site content by editing these files; the interfaces define required fields.
- `src/components/features/ScrollAnimations.tsx` renders nothing; it observes the element with `id="experience-section"` and flips `document.body` to a dark background when it scrolls into view. Renaming or removing that id in `ExperienceSection` silently breaks the effect.
- `src/components/ui/` holds shadcn-style primitives (`components.json`, style `new-york`) plus a few Aceternity-style ones (`bento-grid`, `timeline`). `cn()` lives in `src/lib/utils.ts`.
- Fonts (Clash Display, Chubbo, Boska) come from Fontshare via a single `<link>` in `src/app/layout.tsx`, exposed through CSS variables in `globals.css` and the `font-clash` / `font-chubbo` / `font-boska` Tailwind families.

## Gotchas

- Import animations from `motion/react` (the `framer-motion` package was removed).
- Component files are PascalCase (`HeroSection.tsx`). The dev machine is Windows (case-insensitive), so after renaming a file by case, check `git ls-files` shows the new casing, or Vercel's Linux build will fail.
- Stay on Next 15 / Tailwind 3 / TypeScript 5 unless asked to upgrade. `npm audit` reports a PostCSS advisory bundled in Next 15 that only the Next 16 upgrade fixes.
- `.env*` is gitignored; no environment variables are currently required.

## UI workflow (required rule)

This applies to bigger UI work only: new sections, pages or components, layout changes, redesigns, new interactions or motion. It does NOT apply to small tweaks (changing a font, padding/spacing, a color, copy, an icon, a bug fix); just make those directly. If it's unclear which one a task is, ask.

For bigger UI work, follow these steps in order. Do not write production code until the mockup is approved.
1. **Research on Mobbin first** (Mobbin MCP). Search for relevant screens and flows, and save picks to a collection for that section or page.
2. **Mockup in a claude.ai Artifact.** Get the user's approval.
3. **`impeccable`** audit/critique of the mockup.
4. **`emil-design-eng`** polish pass.
5. **`break-ui`** worst-case data check (long text, missing fields, zero items).
6. **`prototype`** to compare options for motion or gestures where that applies.
7. **`review-animations`** on any motion before it ships.

Skip a step only if the user says so for that task, and say which step was skipped.
