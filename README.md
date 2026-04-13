# Orniva — Where Elegance Adorns You

Premium jewellery brand website built with Next.js, Tailwind CSS, and Sanity.io CMS.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** for styling
- **Sanity.io** for CMS / admin panel
- **Vercel** for deployment

## Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Set up Sanity

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and create a new project
2. Copy your **Project ID**
3. Create a `.env.local` file:

```bash
cp .env.local.example .env.local
```

4. Fill in your Sanity project ID in `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

5. In your Sanity project settings, add `http://localhost:3000` to the CORS origins

### 3. Run the development server

```bash
yarn dev
```

- Website: [http://localhost:3000](http://localhost:3000)
- Admin Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, collections, featured products |
| `/collections` | All collections listing |
| `/collections/[slug]` | Individual collection with products |
| `/products/[slug]` | Product detail page |
| `/about` | About Orniva |
| `/contact` | Contact form |
| `/studio` | Sanity CMS admin panel |

## CMS Content Types

- **Site Settings** — Logo, tagline, social links
- **Hero Banner** — Homepage hero section
- **Collections** — Product categories
- **Products** — Individual products with images, pricing, badges
- **About Page** — About us content

## Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── studio/           # Sanity Studio (admin panel)
│   ├── collections/      # Collection pages
│   ├── products/         # Product pages
│   ├── about/            # About page
│   └── contact/          # Contact page
├── components/           # Reusable UI components
└── sanity/
    ├── schemas/          # Sanity content schemas
    └── lib/              # Sanity client & queries
```
