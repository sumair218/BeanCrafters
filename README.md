# BeanCrafters — Artisan Coffee Haven

A React + Vite recreation of the "BeanCrafters" cafe landing page.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    ImageCollage.jsx
    CraftQuote.jsx
    RoastingExcellence.jsx
    TypesOfBrews.jsx
    StoreLocator.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

All styling is plain CSS in `src/index.css` (no framework), using CSS
variables at the top for colors, fonts, radii, and max width — edit those
to retheme the whole page. Images are placeholder photos from Unsplash;
swap the `src` values in each component for your own assets.
