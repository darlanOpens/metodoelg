# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

Build and run the application:
```bash
# Install dependencies
npm install

# Development (runs on http://localhost:3000/metodoelg)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Linting
npm run lint
```

Docker commands:
```bash
# Build Docker image
docker build -t metodoelg .

# Run Docker container
docker run -p 3000:3000 metodoelg

# Or use docker-compose
docker-compose up --build
```

## Project Architecture

This is a **Next.js 15** landing page for a webinar/course registration system, built with TypeScript and styled using Tailwind CSS with shadcn/ui components.

### Key Architecture Points

1. **Base Path Configuration**: The application runs under `/metodoelg` path (configured in `next.config.mjs`). All navigation and asset references must use the `withBasePath` helper from `lib/paths.ts`.

2. **Landing Page Structure**: The main page (`app/page.tsx`) is composed of modular sections imported from `components/landing/`. Each section is a self-contained component handling a specific part of the landing page flow.

3. **Lead Capture System**:
   - The `LeadForm` component (`components/LeadForm.tsx`) handles form submission to a webhook at `https://n8n.opens.com.br/webhook/hubspot-form`
   - UTM parameters are automatically captured from URL
   - Form includes validation and formatting for Brazilian phone numbers

4. **Event Configuration**: All event-specific content (dates, titles, CTAs) is centralized in `lib/event.ts` with environment variable fallbacks. This allows easy updates without modifying multiple components.

5. **Analytics Integration**: Google Tag Manager is implemented via `GTMProvider` component with ID `GTM-K3SBSHG5`.

6. **Styling Approach**:
   - Dark theme with primary colors: background `#0C1211`, accent `#F9A826`
   - Components use shadcn/ui as base with custom styling
   - Responsive design with mobile-first approach

7. **Build Configuration**:
   - TypeScript and ESLint errors are ignored during build (`next.config.mjs`)
   - Standalone output for optimized Docker deployments
   - Images are unoptimized for better compatibility

## Important Notes

- The project uses environment variables for event details (NEXT_PUBLIC_EVENT_TITLE, NEXT_PUBLIC_EVENT_DATE, NEXT_PUBLIC_EVENT_TIME)
- Form submissions include UTM tracking and user agent data for analytics
- After successful form submission, users are redirected to `/inscricao-confirmada`