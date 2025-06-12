# Dynamic.IO - Premium Web Development Agency

A modern, eye-catching website for Dynamic.IO, showcasing our portfolio of 14+ projects including websites, apps, and browser extensions. Built with cutting-edge technologies and featuring smooth animations, responsive design, and a professional dark theme.

## 🚀 Features

- **Modern Design**: Bold, visually striking UI with smooth animations and microinteractions
- **Dark Theme by Default**: Professional dark theme with light mode toggle
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Portfolio**: Filterable project grid with modal popups
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with Next.js for optimal loading speeds

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
Dynamic.IO2/
├── app/
│   ├── components/
│   │   ├── About.tsx          # About section with timeline
│   │   ├── Contact.tsx        # Contact form and information
│   │   ├── FloatingParticles.tsx # Background particle animation
│   │   ├── Footer.tsx         # Animated footer
│   │   ├── Hero.tsx           # Hero section with tagline
│   │   ├── Navbar.tsx         # Navigation with theme toggle
│   │   ├── Projects.tsx       # Portfolio grid with filtering
│   │   ├── Services.tsx       # Services overview
│   │   └── ThemeProvider.tsx  # Theme context provider
│   ├── data/
│   │   └── projects.ts        # Project data and types
│   ├── globals.css            # Global styles and animations
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── package.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Sections

### Hero Section
- Tagline: "Code. Design. Dominate."
- Animated background elements
- Call-to-action buttons
- Portfolio statistics

### About Section
- Mission statement
- Company timeline
- Achievement statistics
- Why choose us highlights

### Projects Section
- 13 projects total:
  - 10 Websites
  - 2 Apps (Choice Wheel IO, Timer Down)
  - 1 Browser Extension
- Filterable by category
- Modal popups with project details
- Live demo links

### Services Section
- Web Development
- App Development
- Browser Extensions
- Consulting Services

### Contact Section
- Contact form with validation
- Company information
- Social media links
- Location details

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dynamic-io-website.git
   cd dynamic-io-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Portfolio Projects

### Websites (11)
- Password Generator & Analyzer
- Metadata Tool  
- Hash Generator
- Particle Simulator
- ZeroGPT AI Detector
- Credit Card Debt Calculator
- Easy Calculator
- Banana CPM Game
- Guess The Number CPU
- Samin USA
- Focal Stands

### Apps (3)
- Choice Wheel IO - Interactive decision-making app
- Timer Down - Professional countdown timer
- PuffCount - Habit-tracking app for smoking cessation

### Browser Extensions (1)
- Audio Sampler Extension

## 🎨 Customization

### Theme Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#06b6d4',
    600: '#0891b2',
    // ...
  }
}
```

### Adding Projects
Add new projects to `app/data/projects.ts`:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Project description',
  category: 'website' | 'app' | 'extension',
  url: 'https://project-url.com',
  image: 'image-url',
  technologies: ['React', 'TypeScript'],
  featured: true // optional
}
```

## 📱 Responsive Design

- **Mobile**: Optimized for 375px+ screens
- **Tablet**: Enhanced layout for 768px+ screens  
- **Desktop**: Full experience for 1024px+ screens

## ⚡ Performance Features

- Next.js App Router for optimal performance
- Image optimization with Next.js Image component
- Lazy loading for smooth scrolling
- Efficient bundle splitting
- CSS-in-JS with Tailwind for minimal CSS

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Dynamic.IO - hello@dynamic.io

Project Link: [https://github.com/your-username/dynamic-io-website](https://github.com/your-username/dynamic-io-website)

---

**Built with ❤️ by Dynamic.IO** 