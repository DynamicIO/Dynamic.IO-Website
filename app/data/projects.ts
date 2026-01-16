export interface Project {
  id: string
  title: string
  description: string
  category: 'website' | 'app' | 'extension' | 'webtool' | 'game'
  url: string
  image: string
  technologies: string[]
}

export const projects: Project[] = [
  // 1. InviteUs
  {
    id: 'inviteus',
    title: 'InviteUs',
    description: 'Modern invitation management platform for creating and sharing digital invitations.',
    category: 'website',
    url: 'https://inviteus.vercel.app/',
    image: '/InviteUs.png',
    technologies: ['Next.js', 'React', 'Invitation Management', 'Digital Cards']
  },

  // 2. Ehgz
  {
    id: 'ehgz-app',
    title: 'Ehgz',
    description: 'A modern restaurant / venue mobile booking app.',
    category: 'app',
    url: '#',
    image: '/Ehgz.PNG',
    technologies: ['React Native', 'Mobile Development', 'Cross-platform', 'Native Features']
  },

  // 3. Flying Birdie 2
  {
    id: 'flying-birdie-2',
    title: 'Flying Birdie 2',
    description: 'Enhanced sequel to the popular bird flying game with improved graphics, new power-ups, challenging levels, and advanced gameplay mechanics.',
    category: 'game',
    url: 'https://flyingbirdie2.vercel.app/',
    image: '/FlyigBirdie2.png',
    technologies: ['Game Development', 'Canvas API', 'Animation', 'Progressive Web App', 'Advanced Arcade Systems']
  },

  // 4. MetaData Tool V2
  {
    id: 'metadata',
    title: 'MetaData Tool V2',
    description: 'Advanced metadata analyzer that extracts comprehensive data from images and videos, including GPS location, file information, and detailed metadata analysis with interactive mapping.',
    category: 'webtool',
    url: 'https://metadataanalyzerv2.vercel.app/',
    image: '/metadata-tool-v2.png',
    technologies: ['Next.js', 'React', 'GPS Analysis', 'File Processing', 'Interactive Maps']
  },

  // 5. Password Generator and Analyzer
  {
    id: 'passwordgen',
    title: 'Password Generator & Analyzer',
    description: 'Advanced password generation tool with strength analysis and security recommendations.',
    category: 'webtool',
    url: 'https://passwordgenanalyser.vercel.app/',
    image: '/Password Generator and Analyzer.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel']
  },

  // 6. PuffCount (Web)
  {
    id: 'puffcount-web',
    title: 'PuffCount (Web)',
    description: 'Web version of PuffCount: a habit-tracking app to help smokers reduce and quit, featuring logging, stats, and motivational tools.',
    category: 'webtool',
    url: 'https://puffcount.vercel.app/',
    image: '/PuffCountWeb.png',
    technologies: ['React', 'Web App', 'Habit Tracking', 'Data Visualization']
  },

  // 7. Puff Count Mobile
  {
    id: 'puffcount-mobile',
    title: 'Puff Count Mobile',
    description: 'Mobile app designed to help smokers track and reduce their smoking habit with detailed statistics and progress tracking.',
    category: 'app',
    url: '#',
    image: '/Puff Count.PNG',
    technologies: ['React Native', 'Health Tracking', 'Data Visualization', 'Push Notifications', 'Local Storage']
  },

  // 8. Flying Birdie
  {
    id: 'flying-birdie',
    title: 'Flying Birdie',
    description: 'Arcade-style bird flying game with power-ups, combo system, dynamic day/night cycle, and engaging gameplay mechanics designed for endless entertainment.',
    category: 'game',
    url: 'https://flyingbirdie.vercel.app/',
    image: '/FlyingBirdie.png',
    technologies: ['Game Development', 'Canvas API', 'Animation', 'Progressive Web App', 'Arcade Systems']
  },

  // 9. Particle Visualizer
  {
    id: 'particle-sim',
    title: 'Particle Simulator',
    description: 'Interactive physics-based particle simulation with customizable parameters and real-time rendering.',
    category: 'webtool',
    url: 'https://particlesimulator.vercel.app/',
    image: '/Particale Visuilzier.png',
    technologies: ['Canvas API', 'Physics Engine', 'WebGL', 'Animation']
  },

  // 10. Banana Clicking Game
  {
    id: 'banana-game',
    title: 'Banana CPM Game',
    description: 'Addictive clicker game with upgrades, achievements, and leaderboards.',
    category: 'game',
    url: 'https://bananacpmgame.vercel.app/',
    image: '/Click the Banana.png',
    technologies: ['Game Development', 'Local Storage', 'Animation', 'Progressive Web App']
  },

  // 11. AI Text Detector
  {
    id: 'zerogpt',
    title: 'ZeroGPT AI Detector',
    description: 'AI content detection tool to identify AI-generated text with high accuracy.',
    category: 'webtool',
    url: 'https://zerogptai.vercel.app/',
    image: '/ZeroGPT.png',
    technologies: ['AI/ML', 'Natural Language Processing', 'React', 'API Integration']
  },

  // 12. Hash Generator - MD5 & SHA256
  {
    id: 'genhash',
    title: 'Hash Generator',
    description: 'Secure hash generation tool supporting multiple algorithms for data integrity verification.',
    category: 'webtool',
    url: 'https://genhash.vercel.app/',
    image: '/Hash Generator.png',
    technologies: ['JavaScript', 'Crypto APIs', 'Security', 'Web Crypto']
  },

  // 13. Debt Calculator
  {
    id: 'debt-calc',
    title: 'Credit Card Debt Calculator',
    description: 'Financial calculator for debt payoff strategies and interest calculations.',
    category: 'webtool',
    url: 'https://ccdebtcalc.vercel.app/',
    image: '/Debt Calculator.png',
    technologies: ['React', 'Financial Algorithms', 'Charts', 'PWA']
  },

  // 14. Choice Wheel
  {
    id: 'choice-wheel',
    title: 'Choice Wheel IO',
    description: 'Interactive decision-making website with customizable wheels and random selection.',
    category: 'webtool',
    url: 'https://choicewheelio.vercel.app/',
    image: '/Choice Wheel.png',
    technologies: ['Canvas Animation', 'Local Storage', 'PWA', 'Touch Controls']
  },

  // 15. Modern Countdown Timer
  {
    id: 'timer-down',
    title: 'Timer Down',
    description: 'Professional countdown timer website with multiple timer support and notifications.',
    category: 'webtool',
    url: 'https://timerdown.vercel.app/',
    image: '/CountDown Timer.png',
    technologies: ['Web Workers', 'Notifications API', 'PWA', 'Background Processing']
  },

  // 16. Number Guessing Game
  {
    id: 'guess-number',
    title: 'Guess The Number CPU',
    description: 'Interactive number guessing game with AI opponent and difficulty levels.',
    category: 'webtool',
    url: 'https://guessthenumbercpu.vercel.app/',
    image: '/Number Guessing Game.png',
    technologies: ['Game Logic', 'AI Algorithms', 'React', 'State Management']
  },

  // 17. Meta Data Tool (Duplicate)
  {
    id: 'metadata-duplicate',
    title: 'Metadata Tool',
    description: 'Comprehensive metadata extraction and analysis tool for web developers and SEO professionals.',
    category: 'webtool',
    url: 'https://metadatatool.vercel.app/',
    image: '/MetaData Analyzer.png',
    technologies: ['Next.js', 'React', 'API Integration', 'SEO']
  },

  // 18. Modern Scientific Calculator
  {
    id: 'calculator',
    title: 'Easy Calculator',
    description: 'Advanced calculator with scientific functions and expression evaluation.',
    category: 'webtool',
    url: 'https://easycalcu.vercel.app/',
    image: '/Science Calc.png',
    technologies: ['JavaScript', 'Math.js', 'Responsive Design', 'PWA']
  },

  // 19. PuffCount
  {
    id: 'puffcount',
    title: 'PuffCount',
    description: 'Habit-tracking app designed to help smokers reduce and ultimately quit smoking. By logging each puff, visualizing progress and stats, PuffCount empowers users to take control of their habit and stay motivated on their journey to quitting.',
    category: 'app',
    url: '#',
    image: '/PuffCount App.jpg',
    technologies: ['React Native', 'Data Visualization', 'Local Storage', 'Health Tracking', 'Progressive Web App']
  },

  // 20. US Commerce Bank (Placeholder)
  {
    id: 'us-commerce-bank',
    title: 'US Commerce Bank',
    description: 'Modern banking website with secure transactions and user-friendly interface.',
    category: 'website',
    url: '#',
    image: '/logo.png', // Using placeholder image
    technologies: ['Financial Services', 'Security', 'React', 'Banking Solutions']
  },

  // 21. SAMinUSA
  {
    id: 'saminusa',
    title: 'Samin USA',
    description: 'Corporate website for Samin USA with modern design and business functionality.',
    category: 'website',
    url: 'https://saminusa.com/',
    image: '/Sam in USA.png',
    technologies: ['Custom CMS', 'SEO Optimization', 'Corporate Design', 'Performance']
  },

  // 22. EV Shuttle Carting (Placeholder)
  {
    id: 'ev-shuttle-carting',
    title: 'EV Shuttle Carting',
    description: 'Electric vehicle shuttle service platform with booking and tracking capabilities.',
    category: 'website',
    url: '#',
    image: '/logo.png', // Using placeholder image
    technologies: ['Transportation', 'Booking System', 'React', 'Real-time Tracking']
  },

  // 23. Focal Stands
  {
    id: 'focalstands',
    title: 'Focal Stands',
    description: 'E-commerce platform for photography equipment with advanced product showcase.',
    category: 'website',
    url: 'https://focalstands.com/',
    image: '/Focal Stands.png',
    technologies: ['E-commerce', 'Payment Integration', 'Product Catalog', 'Mobile Optimized']
  },

  // 24. REU ASSET: Advanced Secured Sensor Enabling Technologies at FIU
  {
    id: 'fiu-reu',
    title: 'FIU REU ASSET Program',
    description: 'Research Experience for Undergraduates website for Florida International University\'s Advanced Secured Sensor Enabling Technologies program with application portal and research showcase.',
    category: 'website',
    url: 'https://fiuassettreu.vercel.app/',
    image: '/FIU reu website.png',
    technologies: ['Next.js', 'React', 'Responsive Design', 'Academic Portal', 'Educational Platform']
  },

  // 25. Dynamic Gaming Hub
  {
    id: 'dynamic-gaming-hub',
    title: 'Dynamic Gaming Hub',
    description: 'Comprehensive gaming platform featuring multiple games, leaderboards, and interactive gaming experiences.',
    category: 'website',
    url: 'https://dynamicgaminghub.vercel.app/',
    image: '/Dynamic Gaming Hub.png',
    technologies: ['Next.js', 'React', 'Gaming Platform', 'Leaderboards', 'Interactive Games']
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

  // 26. Sawar
  {
    id: 'sawar',
    title: 'Sawar',
    description: 'Discover premium 4K wallpapers for PC and mobile devices. Modern, minimal, and magical. Free downloads and a curated gallery.',
    category: 'website',
    url: 'https://sawar.vercel.app/',
    image: '/sawa.png',
    technologies: ['Next.js', 'React', '4K Wallpapers', 'Gallery']
  },

  // Mobile Apps
  // 27. Flying Birdie Mobile
  {
    id: 'flying-birdie-app',
    title: 'Flying Birdie Mobile',
    description: 'Mobile version of the popular arcade-style bird flying game with touch controls and optimized performance.',
    category: 'game',
    url: '#',
    image: '/Flying Birdie.PNG',
    technologies: ['React Native', 'Game Development', 'Touch Controls', 'Animation', 'Mobile Gaming']
  },

  // 28. Rock Paper Scissors
  {
    id: 'rock-paper-scissors-app',
    title: 'Rock Paper Scissors',
    description: 'Classic rock paper scissors game with engaging animations and score tracking.',
    category: 'game',
    url: '#',
    image: '/Rock Paper Siccors.PNG',
    technologies: ['React Native', 'Game Logic', 'Animation', 'Mobile UI']
  },

  // 29. Task Reminder
  {
    id: 'task-reminder-app',
    title: 'Task Reminder',
    description: 'Productivity app to manage tasks and set reminders with an intuitive interface.',
    category: 'app',
    url: '#',
    image: '/Task Reminder.PNG',
    technologies: ['React Native', 'Push Notifications', 'Task Management', 'Local Storage', 'Productivity']
  },

  // 30. PassGen Pro
  {
    id: 'passgen-pro-app',
    title: 'PassGen Pro',
    description: 'Advanced password generator and manager for mobile with security features and encrypted storage.',
    category: 'app',
    url: '#',
    image: '/PassGen Pro.PNG',
    technologies: ['React Native', 'Security', 'Encryption', 'Password Management', 'Secure Storage']
  },

  // 31. Meta Data Analyzer Mobile
  {
    id: 'metadata-analyzer-app',
    title: 'Meta Data Analyzer',
    description: 'Mobile app for analyzing and extracting metadata from images and videos with detailed information display.',
    category: 'app',
    url: '#',
    image: '/Meta Data Analyzer.PNG',
    technologies: ['React Native', 'File Processing', 'Metadata Extraction', 'Image Analysis', 'Mobile Development']
  }
]

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') {
    return [...projects]
  }
  return projects.filter(project => project.category === category)
}

 