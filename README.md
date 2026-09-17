# site.bard.art

Marketing site for [Bard](https://bard.art), built with [Astro](https://astro.build). Static output, no CMS.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
npm run preview
```

## Structure

- `src/pages/` — one `.astro` file per route (`/`, `/about`, `/support`, `/menu`, `404`)
- `src/layouts/Layout.astro` — `<head>`, navbar, footer
- `src/components/` — Navbar, Footer, PageHeader, Cta, Picture
- `src/styles/global.css` — brand tokens, fonts, typography scale
- `public/` — fonts, images, icons, `CNAME`, manifest (copied to `dist/` as-is)

## Deploy

Pushes to `main` build and deploy via `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages).
In the repo's **Settings → Pages**, the source must be set to **GitHub Actions**. Never commit `dist/`.
