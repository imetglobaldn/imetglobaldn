# IMET Global - Application Documentation

## 1. Technical Stack

### Frontend Technologies
- **Framework**: Next.js 14 (React-based)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React Hooks

### UI Components and Libraries
- **UI Framework**: Custom components with Radix UI primitives
- **Icons**: Lucide React, React Icons
- **Animations**: 
  - Framer Motion
  - AOS (Animate on Scroll)
  - Lottie animations (@lottiefiles/dotlottie-react)
- **Carousel**: Embla Carousel
- **Forms**: React Hook Form with Zod validation
- **Maps Integration**: 
  - Mapbox GL
  - React Leaflet
  - Google Maps (@react-google-maps/api)

### Backend Technologies
- **Runtime**: Node.js
- **API Routes**: Next.js API Routes
- **Email Service**: Nodemailer
- **Image Processing**: Sharp

### Development Tools
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Package Manager**: npm/yarn
- **Analytics**: Vercel Analytics

## 2. Project Structure

```
imetglobal/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── contact/           # Contact page
│   ├── course/            # Course information
│   ├── dashboard/         # Admin dashboard
│   └── news/              # News section
├── components/            # Reusable React components
├── constants/             # Constants and configuration
├── data/                  # Static data files
├── lib/                   # Utility functions
├── public/               # Static assets
├── types/                # TypeScript type definitions
└── utils/                # Helper functions
```

## 3. Application Workflow

### Authentication Flow
1. User authentication is handled through secure API routes
2. Protected routes in dashboard require authentication
3. Session management using secure tokens

### Content Management
1. Dashboard interface for content updates
2. Rich text editing using TinyMCE (@tinymce/tinymce-react)
3. Image optimization using Sharp
4. Content served through API routes

### User Interaction Flow
1. Navigation using Next.js routing
2. Interactive components with animations
3. Form submissions with validation
4. Real-time feedback using react-toastify
5. Map interactions for location-based features

## 4. User Experience (UX)

### Navigation
- Responsive navigation menu using @radix-ui/react-navigation-menu
- Mobile-friendly hamburger menu
- Smooth page transitions with Framer Motion

### Animations
- Page load animations using AOS
- Interactive elements with Framer Motion
- Loading states with react-loader-spinner
- Custom Lottie animations for engaging visuals

### Forms and Validation
- Form handling with react-hook-form
- Real-time validation using zod
- Error messaging with react-toastify
- Calendar integration with react-calendly

## 5. Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Environment variables set up (.env file)

### Installation Steps
1. Clone the repository:
```bash
git clone [repository-url]
cd imetglobal
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a .env file with required variables:
```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_google_maps_key
EMAIL_SERVICE_CONFIG=your_email_service_details
```

4. Run development server:
```bash
npm run dev
# or
yarn dev
```

5. Build for production:
```bash
npm run build
npm start
```

## 6. Common Issues and Solutions

### Build Errors
- **Issue**: Node modules compatibility
  **Solution**: Clear node_modules and package-lock.json, then reinstall dependencies

- **Issue**: TypeScript errors
  **Solution**: Check type definitions and update @types packages

### Runtime Errors
- **Issue**: Map loading issues
  **Solution**: Verify API keys in environment variables

- **Issue**: Image optimization errors
  **Solution**: Ensure Sharp is properly installed and images are in supported formats

## 7. Component Integration

### UI Components
- Components are built using Radix UI primitives
- Styled with Tailwind CSS and class-variance-authority
- Custom hooks for state management
- Responsive design patterns

### Server Integration
- API routes handle data fetching and mutations
- Server-side rendering for optimal performance
- API endpoints follow RESTful conventions
- Error handling with appropriate status codes

## 8. Deployment

### Production Deployment
- Hosted on Vercel
- Automatic deployments from main branch
- Environment variables configured in Vercel dashboard
- Analytics tracking with @vercel/analytics

### Monitoring
- Vercel Analytics for performance monitoring
- Error tracking through logging
- Build and deployment logs
- Performance metrics tracking

## 9. Version Control

### GitHub Repository
- Main branch protected
- Pull request workflow
- Automated testing on PR
- Conventional commit messages

### Development Workflow
1. Feature branches from main
2. Pull request review process
3. Automated testing
4. Merge to main
5. Automatic deployment

## 10. Component-Specific Documentation

### News Page (`app/news/page.tsx`)
- Implements `fetchEducationNews` for retrieving news data
- Server-side rendering for optimal SEO
- Pagination and filtering capabilities
- Responsive grid layout for news items

### Qualification Pathway Component (`components/QualificationPathway.tsx`)
- Interactive pathway visualization
- Progress tracking functionality
- Integration with user profile data
- Dynamic content updates

### Main Page (`app/page.tsx`)
- Landing page implementation
- Hero section with animations
- Feature highlights
- Call-to-action components
- Dynamic content sections

This documentation provides a comprehensive overview of the IMET Global application. For specific technical questions or issues, please refer to the respective section or create an issue in the GitHub repository.
