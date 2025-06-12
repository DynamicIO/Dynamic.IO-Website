'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Linkedin, Mail } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map(item => {
        const el = document.getElementById(item.id);
        return el ? { id: item.id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean) as { id: string, top: number }[];
      const active = offsets.find(item => item.top > 0) || offsets[offsets.length - 1];
      setActiveSection(active ? active.id : null);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isOpen
          ? 'bg-white dark:bg-dark-bg shadow-lg'
          : scrolled
            ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 pr-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.png"
              alt="Dynamic.IO Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mr-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>

        {/* Full-screen mobile nav overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-900/90 via-black/80 to-purple-900/90 backdrop-blur-xl flex flex-col"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="ml-auto w-4/5 max-w-xs h-full bg-white/90 dark:bg-dark-bg/95 shadow-2xl p-8 flex flex-col relative focus:outline-none"
                onClick={e => e.stopPropagation()}
                tabIndex={-1}
              >
                {/* Logo at top */}
                <div className="flex justify-center mb-8">
                  <Image src="/logo.png" alt="Dynamic.IO Logo" width={100} height={32} className="h-8 w-auto" />
                </div>
                {/* Close button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={28} />
                </motion.button>
                {/* Nav items with staggered animation */}
                <motion.nav
                  className="flex flex-col gap-6 mt-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } }
                  }}
                >
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id)
                        setIsOpen(false)
                      }}
                      className={`text-2xl font-semibold px-2 py-2 rounded-lg text-left focus:outline-none transition-colors duration-200
                        ${activeSection === item.id ? 'text-primary-500 dark:text-primary-400 bg-primary-100/60 dark:bg-primary-900/30' : 'text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400'}`}
                      variants={{
                        hidden: { opacity: 0, x: 40 },
                        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
                      }}
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </motion.nav>
                {/* Theme toggle in overlay */}
                <div className="mt-auto flex flex-col items-center gap-6">
                  <motion.button
                    onClick={toggleTheme}
                    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mt-8"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                  </motion.button>
                  {/* Social icons */}
                  <div className="flex gap-6 mt-2">
                    <a href="#" className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400" aria-label="LinkedIn">
                      <Linkedin size={28} />
                    </a>
                    <a href="mailto:DYNAMIC.IO.USA@GMAIL.COM" className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400" aria-label="Email">
                      <Mail size={28} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
} 