# B-Line Fishing Charters — Netlify package

Next.js 16 site with a live NOAA conditions API route, booking request form,
Boat Days / Avalon shuttle page, and full SEO + structured data.

Live site: https://blinecharters.com

## Deploy: GitHub + Netlify

This is a Next.js app, not a static folder, so Netlify has to build it.
Drag-and-drop of the folder will not work.

1. Create a new empty GitHub repository.
2. Upload everything inside this folder to the repository root (including
   `package-lock.json` and the hidden `.gitignore`). Do not upload
   `node_modules` or `.next`.
3. In Netlify, open the existing site and go to
   **Site configuration > Build & deploy > Link repository**, or create a new
   project with **Add new project > Import an existing project**.
4. Netlify detects Next.js automatically. If asked, use:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `22`
5. Deploy.

`netlify.toml` already pins Node 22, loads the official
`@netlify/plugin-nextjs` runtime, sets security headers, and caches
`/images/*` for a year.

## If the site URL ever changes

Update the URL in these four places, then redeploy:

- `app/seo-data.tsx` > `SITE.url`
- `app/booking-form.tsx` > the hidden `_next` field
- `public/robots.txt` > the `Sitemap:` line
- `public/sitemap.xml` > every `<loc>` and `<image:loc>`

## Booking email activation

The booking form posts to FormSubmit, which emails `bradysmith9@icloud.com`.
The first real submission triggers a one-time activation email. Open it and
approve it once. After that, booking requests arrive by email automatically.
Send a test booking right after the first deploy so this is done before any
real customer uses the form.

## Local editing

Install Node.js 22, then:

```bash
npm install
npm run dev
```

Open http://localhost:3000

- Homepage content: `app/page.tsx`
- Boat Days / Avalon / cruises: `app/boat-days/page.tsx`
- About: `app/about/page.tsx`
- Conditions page and NOAA fetch: `app/conditions/`, `app/api/conditions/route.ts`
- Styling: `app/globals.css`
- SEO, business info, FAQs, structured data: `app/seo-data.tsx`
- Images: `public/images`

## Included functionality

- Responsive desktop and mobile layouts
- Fishing, spearfishing, Boat Days, shuttle, and coastal-cruise selection with
  booking-form autofill
- Booking request emails
- About page
- Location-specific NOAA weather and marine reports
- Automatic boat-photo carousel
- LocalBusiness, Service, FAQ, and WebSite structured data for search and AI
  assistants, plus `robots.txt`, `sitemap.xml`, `llms.txt`, and a web manifest
