# Vision Quran Academy

A premium, immersive 3D marketing website for an online Quran teaching academy, built with Next.js (App Router), TypeScript, Tailwind CSS, React Three Fiber, and Framer Motion.

Every primary call-to-action routes to WhatsApp (`https://wa.me/923012711955`) with a context-specific pre-filled message — the site has no backend and no complex lead form.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
/app                  Next.js App Router: layout, page, metadata, sitemap/robots
/components           Section components (Hero, About, Courses, FAQ, ...)
/components/3d        React Three Fiber scenes (ArchScene, GlobeScene)
/components/ui        Reusable UI (WhatsAppButton, FloatingWhatsApp, MobileCTA)
/lib                  whatsapp.ts — builds all pre-filled wa.me links
```

## Editing the WhatsApp number or messages

All WhatsApp links are generated in `lib/whatsapp.ts`. Update `WHATSAPP_NUMBER`
there to change the number everywhere at once, or edit individual message
strings to change the pre-filled text for a specific CTA.

## Replacing placeholder content

- **Testimonials** (`components/Testimonials.tsx`) are clearly marked
  placeholders — swap in real student/parent reviews.
- **Teacher profiles** (`components/TeacherMatch.tsx`) are illustrative;
  replace with your real teachers and matching logic once available.
- No fabricated statistics (student counts, etc.) are used anywhere —
  add real numbers if/when you have them.

## Performance & accessibility notes

- 3D scenes are lazy-loaded client-side only (`next/dynamic`, `ssr: false`)
  and use lightweight procedural geometry — no external 3D model files.
- `prefers-reduced-motion` is respected globally in `app/globals.css`.
- All interactive elements have visible focus states and `aria-label`s.
- Update `metadataBase` / canonical URL in `app/layout.tsx`,
  `app/sitemap.ts`, and `app/robots.ts` once the production domain is live.

## Deployment

This is a standard Next.js app — deploy to Vercel, Netlify, or any Node
hosting platform with `npm run build && npm start`.
