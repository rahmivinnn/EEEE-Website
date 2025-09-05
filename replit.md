# $EEEEE Official Website

## Overview

This is a production-ready official website for $EEEEE, a meme token on the Cardano blockchain. The project is a full-stack single-page application featuring a modern landing page with meme-coin aesthetics, neon purple branding, and animated interactions. The site showcases token information, community links, and provides direct access to trading platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming
- **UI Components**: Radix UI components with shadcn/ui design system for accessible, customizable components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and data fetching
- **Animations**: CSS-based animations with intersection observer for scroll-triggered effects
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: Hot module replacement through Vite integration
- **File Structure**: Monorepo structure with shared types between client and server

### Component Design Patterns
- **Composition**: Component-based architecture with reusable UI components
- **Hooks**: Custom hooks for scroll animations and mobile detection
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Code splitting and lazy loading through Vite

### Design System
- **Typography**: Anton font for headlines, Inter for body text
- **Color Scheme**: Dark theme with neon purple (#8B5CF6) accent colors
- **Layout**: Single-page scrollable layout with full-width sections
- **Interactions**: Hover effects, glow animations, and smooth scrolling

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon serverless PostgreSQL for cloud database hosting
- **Schema**: User management schema with username/password authentication
- **Migrations**: Drizzle Kit for database schema migrations

## External Dependencies

### Core Technologies
- **React Ecosystem**: React, React DOM, React Hook Form with Zod validation
- **TypeScript**: Full type safety across client, server, and shared code
- **Build Tools**: Vite with React plugin and development optimizations

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Class Variance Authority**: Type-safe styling variants
- **Lucide React**: Icon library for consistent iconography

### Database and Backend
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **PostgreSQL**: Relational database with Neon serverless hosting
- **Express.js**: Web application framework for Node.js
- **Connect PG Simple**: PostgreSQL session store for Express

### Development Tools
- **TSX**: TypeScript execution for development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimizations

### External Services
- **Dexhunter**: Primary DEX for token trading integration
- **TapTools**: Cardano analytics platform integration
- **Discord**: Community platform integration
- **Twitter/X**: Social media integration
- **Snek.fun**: Additional trading platform integration

### Font and Assets
- **Google Fonts**: Anton and Inter font families
- **Custom CSS**: Noise overlay effects and gradient animations