
# EnAccelerator Landing Page

## Project Overview

This project is a modern, responsive landing page for EnAccelerator, a student startup incubator by Enactus Melbourne at the University of Melbourne. The site is designed to showcase the program to external stakeholders including student founders, potential investors, startup mentors, and partner organizations.

## Features

- **Responsive Design**: Fully mobile-responsive layout
- **Interactive Timeline**: Interactive, vertically scrolling timeline showing the program structure
- **Testimonials Carousel**: Dynamic testimonials section
- **Newsletter Signup**: Email signup form (frontend only)
- **Animations**: Subtle scroll and interaction animations for an engaging experience

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- shadcn/ui component library

## File Structure

```
src/
├── components/           # Reusable UI components
│   ├── BenefitsSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProgramSection.tsx
│   ├── SignupSection.tsx
│   ├── TestimonialsSection.tsx
│   └── TimelineSection.tsx
├── pages/                # Page components
│   ├── Index.tsx         # Main landing page
│   └── NotFound.tsx      # 404 page
├── utils/                # Utility functions
│   └── scrollReveal.ts   # Scroll animation utility
├── lib/                  # Library code and utilities
│   └── utils.ts          # General utility functions
└── App.tsx               # Root component
```

## Animations and Interactions

The project uses several types of animations to enhance user experience:

1. **Scroll Reveal**: Elements fade in as they enter the viewport
2. **Hover Effects**: Subtle scaling and color transitions on interactive elements
3. **Interactive Timeline**: Click-through program timeline with smooth transitions
4. **Testimonial Carousel**: Animated transitions between testimonials

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

The site is built to be deployed as a static site on any modern hosting platform.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Credits

- Design inspired by modern startup websites like Y Combinator, Linear, and Vercel
- Built with React and Tailwind CSS
- Component library: shadcn/ui
