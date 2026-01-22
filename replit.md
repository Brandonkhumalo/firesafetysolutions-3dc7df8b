# Fire Safety Solutions Africa Website

## Overview
A React-based website for Fire Safety Solutions Africa (Pvt) Ltd - a fire prevention, protection, detection, and extinguishing systems company based in Zimbabwe.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **Build Tool**: Vite
- **State Management**: TanStack React Query

## Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── assets/         # Static assets (images, fonts)
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Development
- **Dev Server**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build` - Creates production build in `dist/`
- **Lint**: `npm run lint`
- **Test**: `npm run test`

## Deployment
This is a static site. Deployment is configured to build and serve from the `dist` directory.

## Recent Changes
- January 22, 2026: Migrated from Lovable to Replit
  - Updated Vite config for Replit (port 5000, allowedHosts)
  - Removed Lovable-specific dependencies (lovable-tagger)
  - Configured static deployment
