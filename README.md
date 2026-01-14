# UrbanWallah Website

A modern, animated website built with React, featuring pleasant bubble animations and a blue and white theme.

## Features

- **Single Page Application** with smooth scroll navigation
- **Bubble Animation** on navigation clicks - pleasant bubble effect
- **Blue and White Theme** - dominant colors throughout
- **Double Down Arrow** - scrolls down one section at a time
- **Double Up Arrow** - appears at bottom, scrolls to top
- **Active Section Detection** - highlights current section in navigation
- **Responsive Design** for all screen sizes

## Pages/Sections

- Home
- About
- Mission
- Vision
- Works
- Projects
- Contact

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Tech Stack

- React 18
- Vite
- CSS3 Animations

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── BubbleTransition.jsx (Bubble animation)
│   │   └── ScrollIndicators.jsx (Down/Up arrows)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Mission.jsx
│   │   ├── Vision.jsx
│   │   ├── Works.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── assets/
│   └── logo.png
├── index.html
├── package.json
└── vite.config.js
```

## Features Explained

### Bubble Animation

When clicking on navigation links, a pleasant bubble animation plays. Multiple bubbles rise from the bottom with different sizes and timings, creating a smooth, pleasant transition effect.

### Scroll Indicators

- **Double Down Arrow**: Appears at the bottom center, scrolls down one section at a time
- **Double Up Arrow**: Appears when you reach the bottom, scrolls to the top of the page

### Theme

The website uses a blue and white color scheme:
- Primary Blue: `#1e40af`
- Light Blue: `#3b82f6`
- Dark Blue: `#1e3a8a`
- Dark White Background: `#f0f4f8`
- White Background: `#ffffff`

## License

© 2026 UrbanWallah. Reinventing What's Possible.

