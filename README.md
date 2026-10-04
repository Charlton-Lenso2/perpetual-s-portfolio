# Perpetual Rojasi | Digital Marketing Portfolio

A personal portfolio for digital marketer Perpetual Rojasi. The site presents selected campaign work, marketing services, professional background, and contact details in a responsive, motion-led experience.

## What's inside

- Home page with an introduction, featured work, services, and key stats
- About page with a profile, career timeline, and certificate gallery
- Work page for campaign case studies
- Contact page with project inquiry details
- Responsive top navbar with a mobile dropdown menu
- Light and dark themes, with the selected theme remembered in the browser
- Page transitions and smooth scrolling

## Run locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available commands

| Command           | Purpose                              |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local development server   |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Check the code with ESLint           |

## Update the portfolio content

- **Projects, services, stats, and timeline:** edit the corresponding arrays in `src/data/site.js`.
- **Home page introduction and imagery:** edit `src/pages/Home.jsx`.
- **About copy and certificate cards:** edit `src/pages/About.jsx`.
- **Contact details:** edit `src/pages/Contact.jsx`.
- **Colors and typography:** update the theme tokens in `src/index.css`.

Replace sample results and descriptions with accurate, approved information before publishing. The current campaign, stat, timeline, and certificate details are demonstration content.

## Replace placeholder images

Images currently use Picsum URLs. Replace each URL with a project-approved image, or add image files under `src/assets/` and reference them from the relevant page or data entry. Use client-approved photography and campaign visuals, and write concise alt text that describes each image.

## Built with

React, Vite, Tailwind CSS, React Router, Motion for React, Lenis, and Lucide React.

## Deployment

Build the site with `npm run build` and publish the generated `dist/` directory to a static host. Since the site uses client-side routes, configure the host to serve `index.html` for route requests such as `/about`, `/projects`, and `/contact`.
