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
server/
└── index.js        # Express backend for email sending
```

## Development
- **Dev Server**: `npm run dev` - Runs on port 5000
- **Build**: `npm run build` - Creates production build in `dist/`
- **Lint**: `npm run lint`
- **Test**: `npm run test`

## Email Configuration
The contact form sends emails using SMTP. Configure these environment variables in `.env`:
- `From_Email` - Sender email address
- `Password` - Email password
- `Outgoing_Server` - SMTP server host
- `SMTP_PORT` - SMTP port (typically 465 for SSL)
- `To_Email` - Recipient email address

## Deployment
Uses Express backend for email functionality. Deploy with `node server/index.js & npm run dev`.

## Recent Changes
- January 22, 2026: Added email functionality
  - Created Express server for email sending with nodemailer
  - Contact form now sends real emails via SMTP
- January 22, 2026: Migrated from Lovable to Replit
  - Updated Vite config for Replit (port 5000, allowedHosts)
  - Removed Lovable-specific dependencies (lovable-tagger)
  - Configured static deployment
