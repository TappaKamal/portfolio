# Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Beautiful wave animation in the navbar
- 🎨 Modern and responsive design
- 🚀 Smooth animations powered by Framer Motion
- 📱 Mobile-friendly interface
- 🎯 Sections: Hero, About, Projects, and Contact

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Name and Title**: Edit `components/Hero.tsx`
2. **About Section**: Edit `components/About.tsx`
3. **Projects**: Edit the projects array in `components/Projects.tsx`
4. **Contact Info**: Edit `components/Contact.tsx`
5. **Metadata**: Update `app/layout.tsx` for SEO

### Colors

Customize colors in `tailwind.config.js` under the `colors` section.

### Background Images/Icons

You can replace placeholder images with assets from [design.odoo.com](https://design.odoo.com/).

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This project can be easily deployed on Vercel:

```bash
npm i -g vercel
vercel
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## License

MIT

