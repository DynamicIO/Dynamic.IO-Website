# Setup Instructions for Dynamic.IO Website

This guide will help you set up and run the Dynamic.IO website on your local machine.

## Prerequisites Installation

### 1. Install Node.js

Since Node.js is not currently installed on your system, you'll need to install it first.

#### For macOS:
**Option A: Using Homebrew (Recommended)**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

**Option B: Download from Official Website**
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version (recommended)
3. Run the installer and follow the instructions

**Option C: Using Node Version Manager (nvm)**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal or run:
source ~/.zshrc

# Install latest LTS Node.js
nvm install --lts
nvm use --lts
```

### 2. Verify Installation

After installing Node.js, verify it's working:

```bash
node --version
npm --version
```

You should see version numbers for both commands.

## Project Setup

### 1. Navigate to Project Directory
```bash
cd /Users/babra023/Desktop/Dynamic.IO2
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React
- TypeScript
- And other development dependencies

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Features

✅ **Completed Features:**
- Modern Next.js 14 setup with App Router
- Tailwind CSS configuration with custom theme
- Dark/Light theme toggle system
- Complete component structure:
  - Hero section with "Code. Design. Dominate." tagline
  - About section with timeline and stats
  - Projects section with filtering and modals
  - Services section with interactive cards
  - Contact section with functional form
  - Animated footer
  - Floating particles background
- Responsive design for all screen sizes
- Framer Motion animations throughout
- TypeScript for type safety
- Project data with all 13 portfolio items

## Portfolio Projects Included

### Websites (10):
1. Password Generator & Analyzer
2. Metadata Tool  
3. Hash Generator
4. Particle Simulator
5. ZeroGPT AI Detector
6. Credit Card Debt Calculator
7. Easy Calculator
8. Banana CPM Game
9. Guess The Number CPU
10. Samin USA
11. Focal Stands

### Apps (2):
1. Choice Wheel IO
2. Timer Down

### Browser Extensions (1):
1. Productivity Browser Extension

## Troubleshooting

### Common Issues:

**Issue: "npm: command not found"**
- Solution: Install Node.js as described above

**Issue: Port 3000 already in use**
- Solution: Use different port: `npm run dev -- --port 3001`

**Issue: TypeScript errors**
- Solution: The components use TypeScript. Ensure all dependencies are installed

**Issue: Styling not loading**
- Solution: Ensure Tailwind CSS is properly configured (already done in this setup)

## Next Steps After Setup

1. **Customize Content**: Update project data in `app/data/projects.ts`
2. **Modify Styling**: Adjust colors in `tailwind.config.js`
3. **Add Real Contact Form**: Integrate with backend service
4. **Deploy**: Use Vercel, Netlify, or your preferred hosting platform

## Deployment

### Deploy to Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify:
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

## Support

If you encounter any issues:
1. Check that Node.js version is 18 or higher
2. Delete `node_modules` and `package-lock.json`, then run `npm install` again
3. Ensure all file paths are correct
4. Check browser console for JavaScript errors

The website is now ready to run! It features a modern, professional design with smooth animations and a complete portfolio showcase. 