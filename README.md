## Abhishek Kumar — Full Stack Developer Portfolio

Personal portfolio showcasing projects, skills, services, and contact details.

**Live:** https://abhixak.vercel.app

## Features

- Modern hero with interactive business card
- Project gallery with live preview screenshots
- Education, experience, and skills sections
- Service areas and FAQ
- SEO metadata + structured data

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- Three.js / @react-three

## Local Setup

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Create a `.env.local` file in the project root with:

```bash
SCREENSHOTONE_API_KEY=your_access_key_here
```

This is required to generate live project previews using ScreenshotOne.

## Deploy (Vercel)

1. Push the repo to GitHub.
2. Import the repository into Vercel.
3. Set the `SCREENSHOTONE_API_KEY` environment variable in Vercel.
4. Deploy.

## SEO Notes

- Update `src/data/portfolio.ts` when you change keywords, projects, or socials.
- Update `src/data/portfolio.ts` if your domain changes.

## Contact

- Email: devabhixak@gmail.com
- LinkedIn: https://www.linkedin.com/in/devabhixak/

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
