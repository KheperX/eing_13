# 🌟 Nateetorn Portfolio Website

A modern, minimal portfolio website showcasing software development expertise with clean design and smooth animations.

## ✨ Features

- 🎨 **Minimal Design**: Clean, professional aesthetic with attention to detail
- 🎭 **Cinematic Loading**: Elegant loading screen with intro animation sequence
- 📱 **Fully Responsive**: Mobile-first design that works perfectly on all devices
- ⚡ **High Performance**: Built with Next.js 15 App Router for optimal speed
- 🎯 **Interactive Elements**: Smooth hover effects and reveal animations
- 🔄 **Smooth Scrolling**: Buttery smooth scroll behavior and transitions
- 🌐 **SEO Optimized**: Proper meta tags and structured data
- 🛡️ **Type Safe**: Built with TypeScript for robust development
- 🎪 **Advanced Animations**: CSS animations with Intersection Observer API
- 🔧 **Modern Tooling**: Latest web development stack and best practices

## 🛠️ Tech Stack

### **Core Technologies**
- **Framework**: Next.js 15.1.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **Database**: Prisma 6.1.0 + PostgreSQL (ready to use)
- **Deployment**: Vercel Platform

### **Development Tools**
- **Version Control**: Git & GitHub
- **Containerization**: Docker
- **Project Management**: ClickUp
- **Security Testing**: Burp Suite
- **Database Management**: HeidiSQL
- **Code Editor**: VS Code

### **Design & UX**
- **Typography**: Inter & Noto Sans JP fonts
- **Icons**: Custom SVG icons and emojis
- **Color Scheme**: Neutral palette with green accents
- **Layout**: CSS Grid and Flexbox
- **Animations**: Custom CSS keyframes and transitions

## 🎯 Project Sections

### 1. **Hero Section**
- Large typography with animated text rotation
- Professional introduction
- Call-to-action buttons
- Scroll indicator

### 2. **About Section**
- Personal philosophy and approach
- Technical skills showcase
- Statistics and achievements
- Comprehensive tool listing

### 3. **Work Section**
- Project portfolio with hover effects
- Technology stacks used
- Interactive project cards
- Performance metrics

### 4. **Contact Section**
- Professional contact information
- Contact form with validation
- Social media links
- Availability status

### 5. **Footer**
- Site navigation
- Social links
- Copyright information
- Back to top functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/KheperX/eing_13.git
cd eing_13
```

2. **Install dependencies:**
```bash
npm install
```

**Note:** If you encounter missing dependency errors:
```bash
npm install --save-dev autoprefixer eslint eslint-config-next
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
eing_13/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & animations
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Main page component
│   ├── not-found.tsx      # 404 error page
│   └── favicon.ico        # Site icon
│
├── components/            # React components
│   ├── LoadingScreen.tsx  # Initial loading animation
│   ├── IntroAnimation.tsx # Welcome intro sequence  
│   ├── Navbar.tsx         # Navigation component
│   ├── HeroSection.tsx    # Hero/landing section
│   ├── AboutSection.tsx   # About section with skills
│   ├── WorkSection.tsx    # Projects showcase
│   ├── ContactSection.tsx # Contact form and info
│   └── Footer.tsx         # Footer component
│
├── hooks/                 # Custom React hooks
│   └── useClient.ts       # Client-side hooks
│
├── public/               # Static assets
│   ├── green_logo.png    # Main logo/favicon
│   ├── Number_13.png     # Additional assets
│   └── Number_13e.png    # Additional assets
│
├── prisma/               # Database schema
│   └── schema.prisma     # Database models
│
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS config
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
└── README.md            # Project documentation
```

## 🎨 Customization Guide

### **Personal Information**
Update your details in these files:
- `app/layout.tsx` - Site metadata and title
- `components/HeroSection.tsx` - Name and main heading
- `components/AboutSection.tsx` - Bio, skills, and statistics  
- `components/ContactSection.tsx` - Contact information
- `components/Footer.tsx` - Footer information

### **Contact Information**
Current contact details:
- **Email**: nateetorn13e@outlook.com  
- **LinkedIn**: [Nateetorn Puangbubpa](https://linkedin.com/in/nateetorn-puangbubpa)
- **GitHub**: [KheperX](https://github.com/KheperX)

### **Styling & Design**
- **Colors**: Edit Tailwind config for color scheme changes
- **Fonts**: Modify `globals.css` for typography updates
- **Animations**: Customize CSS keyframes and transitions
- **Layout**: Adjust component layouts and spacing

### **Content Updates**
- **Projects**: Edit `WorkSection.tsx` to showcase your work
- **Skills**: Update `AboutSection.tsx` with your expertise
- **Biography**: Personalize the about section content

## 🚀 Deployment

### **Deploy with Vercel (Recommended)**

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository  
   - Set Framework Preset to "Next.js"

2. **Environment Variables:**
   Add in Vercel dashboard if needed:
   ```
   DATABASE_URL=your_database_url
   ```

3. **Deploy:**
   - Push to main branch triggers auto-deployment
   - Monitor build logs for any issues

### **Manual Deployment**
```bash
# Build the project
npm run build

# Deploy with Vercel CLI
npm i -g vercel
vercel --prod
```

## 🐛 Troubleshooting

### **Common Issues**

**❌ Cannot find module 'autoprefixer'**
```bash
npm install --save-dev autoprefixer eslint eslint-config-next
```

**❌ Build errors with PostCSS**
```bash
npm install --save-dev postcss autoprefixer tailwindcss
```

**❌ 404 Error on Vercel deployment**
- Check Framework Preset is set to "Next.js"
- Verify `vercel.json` configuration
- Ensure all dependencies are installed

**❌ Hydration errors**
- Clear browser cache and restart dev server
- Check for client/server rendering mismatches

**❌ TypeScript path mapping issues**
- Verify `tsconfig.json` baseUrl and paths settings
- Ensure `@/*` maps to the correct directory

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Production build  
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type checking
npx tsc --noEmit
```

## 📈 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load when needed
- **Caching**: Optimized caching strategies
- **Bundle Analysis**: Monitor bundle size and performance

## 🛡️ Security Features

- **Type Safety**: Full TypeScript implementation
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: Secure rendering practices  
- **HTTPS Only**: Secure connection enforcement
- **Security Headers**: Proper HTTP security headers

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes  
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact & Support

- **Email**: nateetorn13e@outlook.com
- **LinkedIn**: [Nateetorn Puangbubpa](https://linkedin.com/in/nateetorn-puangbubpa)  
- **GitHub**: [KheperX](https://github.com/KheperX)

---

**Built with ❤️ using modern web technologies and best practices.**

*Last updated: May 2025*
