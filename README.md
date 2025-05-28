# Eing Portfolio

A modern, minimal portfolio website built with Next.js 15 and TypeScript.

## Features

- ✨ **Modern Design**: Clean, minimal aesthetic with smooth animations
- 🎭 **Loading Animation**: Cinematic intro sequence with loading screen
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance**: Optimized with Next.js App Router
- 🎨 **Tailwind CSS**: Utility-first CSS framework
- 🔤 **Typography**: Beautiful typography with Inter and Noto Sans JP fonts
- 📊 **Database Ready**: Prisma ORM setup for future features
- 🌟 **Smooth Scrolling**: Buttery smooth scroll animations
- 🎯 **Intersection Observer**: Reveal animations on scroll

## Dependencies

### Core Dependencies:
- **Next.js 15.1.1** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Prisma 6.1.0** - Database ORM (ready to use)
- **PostgreSQL** - Database driver (pg package)

### Dev Dependencies:
- **autoprefixer** - PostCSV vendor prefixes
- **postcss** - CSS processing tool
- **eslint** - Code linting
- **@types packages** - TypeScript definitions

### Installation Command:
```bash
# Install all dependencies
npm install

# If missing autoprefixer error occurs:
npm install --save-dev autoprefixer eslint eslint-config-next
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

**Note:** If you encounter an error about missing 'autoprefixer', run:
```bash
npm install --save-dev autoprefixer eslint eslint-config-next
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Troubleshooting

### Common Issues:

**Error: Cannot find module 'autoprefixer'**
```bash
# Solution: Install missing dependencies
npm install --save-dev autoprefixer eslint eslint-config-next
```

**Build errors with PostCSS**
```bash
# Make sure all PostCSS dependencies are installed
npm install --save-dev postcss autoprefixer tailwindcss
```

**TypeScript path mapping issues**
- Make sure `tsconfig.json` has correct `baseUrl` and `paths` settings
- Verify that `@/*` maps to `./src/*`

**Next.js version compatibility**
- This project uses Next.js 15.1.1 with App Router
- Make sure all config files use the correct format (.js instead of .ts)

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
└── components/
    ├── LoadingScreen.tsx    # Initial loading animation
    ├── IntroAnimation.tsx   # Welcome intro sequence
    ├── Navbar.tsx          # Navigation component
    ├── HeroSection.tsx     # Hero/landing section
    ├── AboutSection.tsx    # About section with skills
    ├── WorkSection.tsx     # Projects showcase
    ├── ContactSection.tsx  # Contact form and info
    └── Footer.tsx          # Footer component
```

## Customization

### Personal Information
Update your personal information in the following files:
- `src/components/LoadingScreen.tsx` - Change name in loading screen
- `src/components/HeroSection.tsx` - Update hero section content
- `src/components/AboutSection.tsx` - Modify about content and skills
- `src/components/WorkSection.tsx` - Add your projects
- `src/components/ContactSection.tsx` - Update contact information
- `src/app/layout.tsx` - Change site metadata

### Colors & Styling
The design uses a neutral color palette defined in Tailwind CSS:
- Primary: `neutral-900` (dark)
- Background: `neutral-50` (light)
- Text: `neutral-900`
- Accents: Various neutral shades

### Animations
All animations are defined in `globals.css`:
- Reveal animations (fade, slide, scale)
- Hover effects
- Loading animations
- Cinematic transitions

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

```bash
npm run build
```

## Database Setup (Optional)

If you want to add backend features:

1. Set up your database URL in `.env`:
```bash
DATABASE_URL="postgresql://..."
```

2. Generate Prisma client:
```bash
npx prisma generate
```

3. Run migrations:
```bash
npx prisma db push
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS
