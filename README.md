# Caring.com Frontend Clone

This project is a pixel-perfect frontend clone of Caring.com, replicating only the visual appearance and layout of the site without any backend functionality or real content.

## Technologies Used

### Core Framework
- **Next.js** (Latest version) - React framework used by the original site
- **React** (Latest version) - Frontend library for building user interfaces
- **TypeScript** - For type safety and better developer experience

### Styling
- **CSS Modules** - For component-scoped styling (matching the original site's approach)
- **Custom CSS Variables** - For consistent theming across components

### Development Tools
- **ESLint** - For code quality and consistency

## Project Structure

```
caring-clone/
├── public/
│   └── images/           # Placeholder for all image assets
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout component
│   │   └── page.tsx      # Main page component
│   ├── components/       # Reusable UI components
│   │   ├── Header/       # Site header component
│   │   ├── Hero/         # Hero section with search
│   │   ├── CareTypes/    # Care types section
│   │   ├── Communities/  # Featured communities section
│   │   ├── Review/       # Review section
│   │   ├── ValueProps/   # Value propositions section
│   │   ├── Experts/      # Expert profiles section
│   │   ├── Resources/    # Resources section
│   │   ├── CallToAction/ # Call to action section
│   │   ├── StateSelection/ # State selection section
│   │   └── Footer/       # Site footer
│   └── styles/           # Global styles
│       └── globals.css   # Global CSS variables and styles
└── package.json          # Project dependencies and scripts
```

## Environment Requirements

- **Node.js**: v22.14.0 or later
- **npm**: 10.9.2 or later

## Installation Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd caring-clone
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

To run the development server:

```bash
npm run dev
```

This will start the Next.js development server at [http://localhost:3000](http://localhost:3000).

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Notes on Implementation

### Image Assets
- All image references in the code are placeholders
- Comments in the code indicate the expected dimensions and content for each image
- To complete the implementation, you would need to:
  1. Add actual images to the `/public/images/` directory
  2. Update the image paths in the components

### Responsive Design
- The site is fully responsive with breakpoints matching the original site:
  - Desktop: 1200px and above
  - Tablet: 992px to 1199px
  - Small tablet: 768px to 991px
  - Mobile: Below 768px

### Interactive Elements
- All interactive elements (buttons, links, hover states) match the original site's behavior
- Animations and transitions are implemented with CSS to match the original site

## Additional Features

To further enhance this frontend clone, consider:

1. Adding actual image assets
2. Implementing form validation for the search functionality
3. Adding page transitions with Next.js
4. Implementing actual navigation between pages

## Credits

This project is a visual clone created for educational purposes only. All design credit goes to Caring.com.
