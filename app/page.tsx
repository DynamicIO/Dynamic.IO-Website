import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingParticles from './components/FloatingParticles'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <FloatingParticles />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
} 