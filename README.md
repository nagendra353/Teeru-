# Teeru — Hairstyle Discovery Website

A responsive React + Vite frontend concept for Teeru, a hairstyle discovery and future salon-booking platform.

## Included
- Premium aubergine, ivory, champagne and lime visual theme
- Responsive navigation and landing page
- Slow motion hero details and animated content reveals
- Hairstyle catalogue with category, gender and text filters
- Save/favourite interaction (in-memory only)
- Indian heritage editorial section
- Virtual preview modal with local file selection UI
- Reduced-motion accessibility support

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build for deployment

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In repository Settings → Pages, select GitHub Actions as the source.
3. Add a workflow that installs dependencies, runs `npm run build`, and deploys the `dist` folder. For a custom repository path, set Vite's `base` in `vite.config.js` to `'/YOUR-REPOSITORY-NAME/'`.

For the simplest hosting workflow, this Vite project can also be deployed to Vercel or Netlify by importing the GitHub repository and using `npm run build` with output directory `dist`.

## Project structure

```text
teeru-github/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

## Important: demo vs production

This repository is a frontend starter, not a complete marketplace backend.

- The hairstyle data in `src/App.jsx` is sample catalogue data. Replace or expand it with your verified 104+ global styles and Indian regional catalogue.
- The photo chooser is a UI demonstration. It does not send a photo to an AI model. Connect your chosen image-generation provider through a secure backend/API route; do not put secret API keys in frontend code.
- Salon search, live availability, booking, payments, authentication and persistent favourites need backend services and database integration.
- Remote editorial photography is loaded from Unsplash URLs. Replace with licensed brand imagery before commercial launch.

## Editing the catalogue

Find the `styles` array near the top of `src/App.jsx`. Each item has `name`, `group`, `region`, `gender`, `length`, `type` and an Unsplash photo ID. Add catalogue entries there and create additional categories in the `filters` array.
