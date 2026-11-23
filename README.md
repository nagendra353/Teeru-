# Teeru — Hairstyle Discovery Website

A responsive React + Vite landing page and hairstyle lookbook for Teeru.

## Features
- Premium forest-green, warm-ivory and muted-lime visual identity
- Slow, restrained Framer Motion entrance and floating animations
- Responsive mobile navigation
- Searchable hairstyle lookbook with category filters
- Indian heritage, regional, bridal and modern hairstyle sections
- Early-access email form UI
- Salon partnership CTA

## Run locally
```bash
npm install
npm run dev
```

Create a production build:
```bash
npm run build
npm run preview
```

## Deploy to GitHub
1. Create a new GitHub repository, for example `teeru-hairstyle-studio`.
2. Upload the contents of this folder to the repository root.
3. In your terminal, run:
   ```bash
   git init
   git add .
   git commit -m "Build Teeru hairstyle discovery website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/teeru-hairstyle-studio.git
   git push -u origin main
   ```
4. For hosting, connect the repository to Vercel or Netlify. Use `npm run build` as the build command and `dist` as the output directory.

## Important before launch
- The hairstyle list currently contains 12 sample entries. Replace or expand the `styles` array in `src/App.jsx` with your verified 104+ global styles and Indian regional catalogue.
- The current images are remote Unsplash editorial placeholders. Replace them with licensed hairstyle reference photos before commercial launch.
- The early-access form is front-end only. Connect it to a form provider or backend before collecting emails.
- AI hairstyle generation, image upload, salon listings, real-time slots, booking, payments and user accounts are not connected yet. These require APIs and backend services.
- Some heritage hairstyle names and descriptions need historical/cultural verification before being presented as authentic.
- Update the contact email and social links before publishing.

## Tech
React, Vite, Framer Motion, Lucide React, CSS.
