# Teeru Hairstyle Catalogue — Cloudflare Workers build

## Important: upload the whole project
The previous deployment failed because Vite could not find `src/main.jsx`.
Do not upload only `index.html`. Keep the complete `src/` folder beside `index.html`.

Required structure:
```text
teeru/
├── index.html
├── package.json
├── vite.config.js
├── wrangler.jsonc
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── catalogue.js
│   └── styles.css
└── public/
    └── images/
        └── teeru-hero-demo.png
```

## Cloudflare deployment settings
- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command (Workers): `npx wrangler deploy`
- Root directory: `/` (repository root)

The `wrangler.jsonc` file tells Workers to serve the generated `dist` directory and use SPA fallback.

## Run locally
```bash
npm install
npm run dev
```

## Deploy
```bash
npm install
npm run deploy
```

If using Cloudflare Pages instead of Workers, set build command to `npm run build` and output directory to `dist`; do not use `wrangler deploy` as the Pages build command.

## Content limitations
The style catalogue and filters work in the frontend. Demo hairstyle-card photos are generic remote portraits and are not verified images of each named haircut. AI try-on, user photo upload, salon data, booking, accounts and payments still need backend/API integration.
