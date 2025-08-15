# replit.md

## Overview

This is a modern full-stack web application built with React, TypeScript, and Express.js. The application serves as an AI-powered IT company website featuring a contemporary dark-themed design with 3D styling and smooth animations. The project includes multiple pages (Home, About Us, Services, Contact Us, FAQ) with a complete routing system and responsive design. The project uses a monorepo structure with shared TypeScript definitions and implements a complete CI/CD-ready setup.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with hot module replacement
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: In-memory storage with planned PostgreSQL session store
- **Development**: tsx for TypeScript execution

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── pages/    # Individual page components (Home, About, Services, Contact, FAQ)
│   │   ├── components/  # Reusable UI components
│   │   └── hooks/    # Custom React hooks
├── server/           # Express backend API
├── shared/           # Shared TypeScript schemas and types
├── migrations/       # Database migration files
└── dist/            # Production build output
```

## Key Components

### Frontend Components
- **Header**: Fixed navigation with glass-morphism effect and smooth scrolling
- **Hero**: Landing section with 3D animated elements and gradient text
- **Features**: Service showcase with hover animations
- **About**: Company information with interactive elements
- **Services**: Tabbed interface displaying AI/ML capabilities
- **Contact**: Contact form with newsletter subscription
- **Footer**: Links and social media integration

### Backend Services
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Route Registration**: Modular route handling system
- **Error Handling**: Centralized error middleware
- **Development Tools**: Vite integration for SSR-like development experience

### Shared Resources
- **Schema Definitions**: Drizzle schema with Zod validation
- **Type Safety**: End-to-end TypeScript types
- **Database Models**: User authentication schema

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express routes handle requests through the storage interface
3. **Data Storage**: Drizzle ORM manages database operations (currently in-memory)
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Updates**: React Query manages cache invalidation and updates

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI components for accessibility
- **Icons**: Lucide React and React Icons
- **Animations**: CSS-based animations with Tailwind utilities
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Date Utilities**: date-fns for date manipulation

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: Replit-specific plugins for enhanced development experience

### Build Dependencies
- **Bundling**: esbuild for production server builds
- **Development**: Vite with React plugin and runtime error overlay
- **Type Checking**: TypeScript compiler with strict configuration

## Deployment Strategy

### Development
- **Hot Reloading**: Vite development server with HMR
- **Type Checking**: Real-time TypeScript compilation
- **Error Handling**: Runtime error modal for development debugging
- **Database**: In-memory storage for rapid prototyping

### Production
- **Build Process**: 
  1. Vite builds the React frontend to `dist/public`
  2. esbuild bundles the Express server to `dist/index.js`
- **Server**: Single Node.js process serving both API and static files
- **Database**: PostgreSQL with Drizzle migrations
- **Environment**: Uses DATABASE_URL for PostgreSQL connection

### Database Strategy
- **Development**: MemStorage class provides in-memory data persistence
- **Production**: Drizzle ORM with PostgreSQL for scalable data storage
- **Migrations**: Drizzle Kit manages database schema changes
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment

The application is designed to be easily deployable on platforms like Replit, Vercel, or any Node.js hosting service with minimal configuration changes.