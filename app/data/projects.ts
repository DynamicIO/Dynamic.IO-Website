export interface Project {
  id: string
  title: string
  description: string
  category: 'website' | 'app' | 'extension' | 'webtool' | 'webgame'
  url: string
  image: string
  technologies: string[]
}

export const projects: Project[] = [
  // 1. MetaData Tool V2
  {
    id: 'metadata',
    title: 'MetaData Tool V2',
    description: 'Advanced metadata analyzer that extracts comprehensive data from images and videos, including GPS location, file information, and detailed metadata analysis with interactive mapping.',
    category: 'webtool',
    url: 'https://metadataanalyzerv2.vercel.app/',
    image: '/metadata-tool-v2.png',
    technologies: ['Next.js', 'React', 'GPS Analysis', 'File Processing', 'Interactive Maps']
  },
  
  // 2. Password Security Tool
  {
    id: 'passwordgen',
    title: 'Password Generator & Analyzer',
    description: 'Advanced password generation tool with strength analysis and security recommendations.',
    category: 'webtool',
    url: 'https://passwordgenanalyser.vercel.app/',
    image: '/Password Generator and Analyzer.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel']
  },
  
  // 3. PuffCount
  {
    id: 'puffcount',
    title: 'PuffCount',
    description: 'Habit-tracking app designed to help smokers reduce and ultimately quit smoking. By logging each puff, visualizing progress and stats, PuffCount empowers users to take control of their habit and stay motivated on their journey to quitting.',
    category: 'app',
    url: '#',
    image: '/PuffCount App.jpg',
    technologies: ['React Native', 'Data Visualization', 'Local Storage', 'Health Tracking', 'Progressive Web App']
  },
  
  // 4. Flying Birdie
  {
    id: 'flying-birdie',
    title: 'Flying Birdie',
    description: 'Arcade-style bird flying game with power-ups, combo system, dynamic day/night cycle, and engaging gameplay mechanics designed for endless entertainment.',
    category: 'webgame',
    url: 'https://flyingbirdie.vercel.app/',
    image: '/FlyingBirdie.png',
    technologies: ['Game Development', 'Canvas API', 'Animation', 'Progressive Web App', 'Arcade Systems']
  },
  
  // 5. Particle Visualizer
  {
    id: 'particle-sim',
    title: 'Particle Simulator',
    description: 'Interactive physics-based particle simulation with customizable parameters and real-time rendering.',
    category: 'webtool',
    url: 'https://particlesimulator.vercel.app/',
    image: '/Particale Visuilzier.png',
    technologies: ['Canvas API', 'Physics Engine', 'WebGL', 'Animation']
  },
  
  // 6. Banana Clicking Game
  {
    id: 'banana-game',
    title: 'Banana CPM Game',
    description: 'Addictive clicker game with upgrades, achievements, and leaderboards.',
    category: 'webgame',
    url: 'https://bananacpmgame.vercel.app/',
    image: '/Click the Banana.png',
    technologies: ['Game Development', 'Local Storage', 'Animation', 'Progressive Web App']
  },
  
  // 7. AI Text Detector
  {
    id: 'zerogpt',
    title: 'ZeroGPT AI Detector',
    description: 'AI content detection tool to identify AI-generated text with high accuracy.',
    category: 'webtool',
    url: 'https://zerogptai.vercel.app/',
    image: '/ZeroGPT.png',
    technologies: ['AI/ML', 'Natural Language Processing', 'React', 'API Integration']
  },
  
  // 8. Hash Generator - MD5 & SHA256
  {
    id: 'genhash',
    title: 'Hash Generator',
    description: 'Secure hash generation tool supporting multiple algorithms for data integrity verification.',
    category: 'webtool',
    url: 'https://genhash.vercel.app/',
    image: '/Hash Generator.png',
    technologies: ['JavaScript', 'Crypto APIs', 'Security', 'Web Crypto']
  },
  
  // 9. Debt Calculator
  {
    id: 'debt-calc',
    title: 'Credit Card Debt Calculator',
    description: 'Financial calculator for debt payoff strategies and interest calculations.',
    category: 'webtool',
    url: 'https://ccdebtcalc.vercel.app/',
    image: '/Debt Calculator.png',
    technologies: ['React', 'Financial Algorithms', 'Charts', 'PWA']
  },
  
  // 10. Choice Wheel
  {
    id: 'choice-wheel',
    title: 'Choice Wheel IO',
    description: 'Interactive decision-making website with customizable wheels and random selection.',
    category: 'webtool',
    url: 'https://choicewheelio.vercel.app/',
    image: '/Choice Wheel.png',
    technologies: ['Canvas Animation', 'Local Storage', 'PWA', 'Touch Controls']
  },
  
  // 11. Modern Countdown Timer
  {
    id: 'timer-down',
    title: 'Timer Down',
    description: 'Professional countdown timer website with multiple timer support and notifications.',
    category: 'webtool',
    url: 'https://timerdown.vercel.app/',
    image: '/CountDown Timer.png',
    technologies: ['Web Workers', 'Notifications API', 'PWA', 'Background Processing']
  },
  
  // 12. Number Guessing Game
  {
    id: 'guess-number',
    title: 'Guess The Number CPU',
    description: 'Interactive number guessing game with AI opponent and difficulty levels.',
    category: 'webtool',
    url: 'https://guessthenumbercpu.vercel.app/',
    image: '/Number Guessing Game.png',
    technologies: ['Game Logic', 'AI Algorithms', 'React', 'State Management']
  },
  
  // 13. Meta Data Tool (Duplicate)
  {
    id: 'metadata-duplicate',
    title: 'Metadata Tool',
    description: 'Comprehensive metadata extraction and analysis tool for web developers and SEO professionals.',
    category: 'webtool',
    url: 'https://metadatatool.vercel.app/',
    image: '/MetaData Analyzer.png',
    technologies: ['Next.js', 'React', 'API Integration', 'SEO']
  },
  
  // 14. Modern Scientific Calculator
  {
    id: 'calculator',
    title: 'Easy Calculator',
    description: 'Advanced calculator with scientific functions and expression evaluation.',
    category: 'webtool',
    url: 'https://easycalcu.vercel.app/',
    image: '/Science Calc.png',
    technologies: ['JavaScript', 'Math.js', 'Responsive Design', 'PWA']
  },
  
  // 15. US Commerce Bank (Placeholder)
  {
    id: 'us-commerce-bank',
    title: 'US Commerce Bank',
    description: 'Modern banking website with secure transactions and user-friendly interface.',
    category: 'website',
    url: '#',
    image: '/logo.png', // Using placeholder image
    technologies: ['Financial Services', 'Security', 'React', 'Banking Solutions']
  },
  
  // 16. SAMinUSA
  {
    id: 'saminusa',
    title: 'Samin USA',
    description: 'Corporate website for Samin USA with modern design and business functionality.',
    category: 'website',
    url: 'https://saminusa.com/',
    image: '/Sam in USA.png',
    technologies: ['Custom CMS', 'SEO Optimization', 'Corporate Design', 'Performance']
  },
  
  // 17. EV Shuttle Carting (Placeholder)
  {
    id: 'ev-shuttle-carting',
    title: 'EV Shuttle Carting',
    description: 'Electric vehicle shuttle service platform with booking and tracking capabilities.',
    category: 'website',
    url: '#',
    image: '/logo.png', // Using placeholder image
    technologies: ['Transportation', 'Booking System', 'React', 'Real-time Tracking']
  },
  
  // 18. Focal Stands
  {
    id: 'focalstands',
    title: 'Focal Stands',
    description: 'E-commerce platform for photography equipment with advanced product showcase.',
    category: 'website',
    url: 'https://focalstands.com/',
    image: '/Focal Stands.png',
    technologies: ['E-commerce', 'Payment Integration', 'Product Catalog', 'Mobile Optimized']
  },
  
  // 19. REU ASSET: Advanced Secured Sensor Enabling Technologies at FIU
  {
    id: 'fiu-reu',
    title: 'FIU REU ASSET Program',
    description: 'Research Experience for Undergraduates website for Florida International University\'s Advanced Secured Sensor Enabling Technologies program with application portal and research showcase.',
    category: 'website',
    url: 'https://fiuassettreu.vercel.app/',
    image: '/FIU reu website.png',
    technologies: ['Next.js', 'React', 'Responsive Design', 'Academic Portal', 'Educational Platform']
  },

  // Browser Extension (keeping from original list)
  {
    id: 'productivity-ext',
    title: 'Productivity Browser Extension',
    description: 'Browser extension for enhanced productivity with tab management and focus tools.',
    category: 'extension',
    url: '#',
    image: '/Audio Sampler Extension.png',
    technologies: ['Browser APIs', 'Chrome Extension', 'Background Scripts', 'Content Scripts']
  },
  // Sawar
  {
    id: 'sawar',
    title: 'Sawar',
    description: 'Discover premium 4K wallpapers for PC and mobile devices. Modern, minimal, and magical. Free downloads and a curated gallery.',
    category: 'website',
    url: 'https://sawar.vercel.app/',
    image: '/sawa.png',
    technologies: ['Next.js', 'React', '4K Wallpapers', 'Gallery']
  },
  // PuffCount (new)
  {
    id: 'puffcount-web',
    title: 'PuffCount (Web)',
    description: 'Web version of PuffCount: a habit-tracking app to help smokers reduce and quit, featuring logging, stats, and motivational tools.',
    category: 'webtool',
    url: 'https://puffcount.vercel.app/',
    image: '/PuffCountWeb.png',
    technologies: ['React', 'Web App', 'Habit Tracking', 'Data Visualization']
  }
]

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

 