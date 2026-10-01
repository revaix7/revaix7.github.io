# revaix7.github.io

Personal portfolio for **Xavier Malara** — a Software Engineering student at the
University of Ottawa. Built with Next.js, TypeScript, and Tailwind CSS, and deployed
to GitHub Pages as a static site.

Live site: https://revaix7.github.io

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Edit content

- **Personal info & skills:** `data/site.ts`
- **Projects:** `data/projects.ts` (add `repo` / `demo` links and tweak `tech`)
- **Sections / layout:** `app/page.tsx` and `components/`

## Build / deploy

```bash
npm run build    # static export into ./out
```

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

