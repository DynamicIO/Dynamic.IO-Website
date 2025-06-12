export interface Project {
  id: string
  title: string
  description: string
  category: 'website' | 'app' | 'extension'
  url: string
  image: string
  technologies: string[]
}

export const projects: Project[] = [
  // Websites
  {
    id: 'passwordgen',
    title: 'Password Generator & Analyzer',
    description: 'Advanced password generation tool with strength analysis and security recommendations.',
    category: 'website',
    url: 'https://passwordgenanalyser.vercel.app/',
    image: '/Password Generator and Analyzer.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel']
  },
  {
    id: 'metadata',
    title: 'Metadata Tool',
    description: 'Comprehensive metadata extraction and analysis tool for web developers and SEO professionals.',
    category: 'website',
    url: 'https://metadatatool.vercel.app/',
    image: '/MetaData Analyzer.png',
    technologies: ['Next.js', 'React', 'API Integration', 'SEO']
  },
  {
    id: 'genhash',
    title: 'Hash Generator',
    description: 'Secure hash generation tool supporting multiple algorithms for data integrity verification.',
    category: 'website',
    url: 'https://genhash.vercel.app/',
    image: '/Hash Generator.png',
    technologies: ['JavaScript', 'Crypto APIs', 'Security', 'Web Crypto']
  },
  {
    id: 'particle-sim',
    title: 'Particle Simulator',
    description: 'Interactive physics-based particle simulation with customizable parameters and real-time rendering.',
    category: 'website',
    url: 'https://particlesimulator.vercel.app/',
    image: '/Particale Visuilzier.png',
    technologies: ['Canvas API', 'Physics Engine', 'WebGL', 'Animation']
  },
  {
    id: 'zerogpt',
    title: 'ZeroGPT AI Detector',
    description: 'AI content detection tool to identify AI-generated text with high accuracy.',
    category: 'website',
    url: 'https://zerogptai.vercel.app/',
    image: '/ZeroGPT.png',
    technologies: ['AI/ML', 'Natural Language Processing', 'React', 'API Integration']
  },
  {
    id: 'debt-calc',
    title: 'Credit Card Debt Calculator',
    description: 'Financial calculator for debt payoff strategies and interest calculations.',
    category: 'website',
    url: 'https://ccdebtcalc.vercel.app/',
    image: '/Debt Calculator.png',
    technologies: ['React', 'Financial Algorithms', 'Charts', 'PWA']
  },
  {
    id: 'calculator',
    title: 'Easy Calculator',
    description: 'Advanced calculator with scientific functions and expression evaluation.',
    category: 'website',
    url: 'https://easycalcu.vercel.app/',
    image: '/Science Calc.png',
    technologies: ['JavaScript', 'Math.js', 'Responsive Design', 'PWA']
  },
  {
    id: 'banana-game',
    title: 'Banana CPM Game',
    description: 'Addictive clicker game with upgrades, achievements, and leaderboards.',
    category: 'website',
    url: 'https://bananacpmgame.vercel.app/',
    image: '/Click the Banana.png',
    technologies: ['Game Development', 'Local Storage', 'Animation', 'Progressive Web App']
  },
  {
    id: 'guess-number',
    title: 'Guess The Number CPU',
    description: 'Interactive number guessing game with AI opponent and difficulty levels.',
    category: 'website',
    url: 'https://guessthenumbercpu.vercel.app/',
    image: '/Number Guessing Game.png',
    technologies: ['Game Logic', 'AI Algorithms', 'React', 'State Management']
  },
  {
    id: 'saminusa',
    title: 'Samin USA',
    description: 'Corporate website for Samin USA with modern design and business functionality.',
    category: 'website',
    url: 'https://saminusa.com/',
    image: '/Sam in USA.png',
    technologies: ['Custom CMS', 'SEO Optimization', 'Corporate Design', 'Performance']
  },
  {
    id: 'focalstands',
    title: 'Focal Stands',
    description: 'E-commerce platform for photography equipment with advanced product showcase.',
    category: 'website',
    url: 'https://focalstands.com/',
    image: '/Focal Stands.png',
    technologies: ['E-commerce', 'Payment Integration', 'Product Catalog', 'Mobile Optimized']
  },

  {
    id: 'choice-wheel',
    title: 'Choice Wheel IO',
    description: 'Interactive decision-making website with customizable wheels and random selection.',
    category: 'website',
    url: 'https://choicewheelio.vercel.app/',
    image: '/Choice Wheel.png',
    technologies: ['Canvas Animation', 'Local Storage', 'PWA', 'Touch Controls']
  },
  {
    id: 'timer-down',
    title: 'Timer Down',
    description: 'Professional countdown timer website with multiple timer support and notifications.',
    category: 'website',
    url: 'https://timerdown.vercel.app/',
    image: '/CountDown Timer.png',
    technologies: ['Web Workers', 'Notifications API', 'PWA', 'Background Processing']
  },

  // Apps
  {
    id: 'puffcount',
    title: 'PuffCount',
    description: 'Habit-tracking app designed to help smokers reduce and ultimately quit smoking. By logging each puff, visualizing progress and stats, PuffCount empowers users to take control of their habit and stay motivated on their journey to quitting.',
    category: 'app',
    url: '#',
    image: '/PuffCount App.jpg',
    technologies: ['React Native', 'Data Visualization', 'Local Storage', 'Health Tracking', 'Progressive Web App']
  },

  // Browser Extension
  {
    id: 'productivity-ext',
    title: 'Productivity Browser Extension',
    description: 'Browser extension for enhanced productivity with tab management and focus tools.',
    category: 'extension',
    url: '#',
    image: '/Audio Sampler Extension.png',
    technologies: ['Browser APIs', 'Chrome Extension', 'Background Scripts', 'Content Scripts']
  }
]

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

 