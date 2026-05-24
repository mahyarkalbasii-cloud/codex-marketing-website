# PersianSaze Marketing Website

Next.js marketing site for PersianSaze, prepared for static deployment on Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The production output is generated in `out/`.

## Cloudflare Pages

Use these settings when importing the GitHub repository into Cloudflare Pages:

- Framework preset: `Next.js (Static HTML Export)`
- Production branch: `main`
- Build command: `npx next build`
- Build output directory: `out`
- Node version: `22` via `.nvmrc`

The repository also includes `wrangler.toml`, so direct deployment is available after Cloudflare authentication:

```bash
npm run deploy:cloudflare
```
