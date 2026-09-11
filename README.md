# Om Patel — Portfolio

A single-page portfolio built as a "systems status page" — infrastructure monitoring and
incident-response visuals used to tell a real IT support + full-stack development story.

## Stack

- React 18 + TypeScript
- Vite (build tool)
- GSAP + ScrollTrigger (the boot-sequence hero animation, the scroll-synced experience
  timeline, and the interactive DNS-incident "traceroute" story)
- Plain CSS (no framework) — all styling lives in `src/styles`

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Edit your content

Everything text-based — your name, summary, work history, skills, projects, contact
details — lives in one file: **`src/content.ts`**. Edit that file and every section
updates automatically. You don't need to touch the components unless you want to change
layout or add a section.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`. That folder is the entire deployable site.

## Deploy it

**Vercel (recommended, free tier is fine):**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Build command `npm run build`, output directory `dist`.
4. Deploy — you'll get a live URL in about a minute.

**Netlify:**
1. Push to GitHub, or drag-and-drop the `dist/` folder after running `npm run build`
   at netlify.com/drop for a one-off deploy.
2. For git-based deploys: build command `npm run build`, publish directory `dist`.

Either way, you can attach a custom domain afterward from the host's dashboard.

## Notes

- Reduced-motion is respected — all animation is disabled for users with that OS setting on.
- The DNS incident story matches your career profile's accuracy note (executed under a
  principal engineer's guidance) — keep that phrasing if you revise it.
- Add real screenshots/GIFs of StreamMark, EduTrack Pro, or API Management under
  `src/content.ts` → `projects` if you want visuals instead of just repo links later.
