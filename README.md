# Arshad Portfolio (local scaffold)

This workspace contains a minimal scaffold to run the portfolio app locally:

- `server/` - Express backend (serves API and production build)
- `client/` - Vite + React frontend (includes `Portfolio` component)

Quick start:

1. Install dependencies (root will also install client/server):

```bash
npm run install-all
```

2. Start both servers (root):

```bash
npm run dev
```

- Frontend dev server: http://localhost:5173 (Vite)
- Backend: http://localhost:4000 (API)

If `npm run install-all` fails, install manually:

```bash
npm install
cd client
npm install
cd ../server
npm install
```

Then run `npm run dev` from project root.
