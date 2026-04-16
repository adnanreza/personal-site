# adnanreza.com

Personal website for Adnan Reza — software engineer and computer science educator.

Built with [Vite](https://vite.dev/) + React. Deployed on [Netlify](https://www.netlify.com/).

## Development

```sh
nvm use          # Node 22 (see .nvmrc)
npm install
npm run dev      # start dev server at http://localhost:5173
```

## Production build

```sh
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Stack

- Vite 7 (React plugin)
- React 18 with `react-router-dom` v5
- Materialize CSS for styling
- Framer Motion for page transitions
- Font Awesome (via CDN) + Material Icons (via Google Fonts)

## Deployment

Netlify builds from `master` and publishes `dist/`. Build config lives in `netlify.toml`, including the SPA fallback redirect so client-side routes (e.g. `/Experience`) serve `index.html`.
