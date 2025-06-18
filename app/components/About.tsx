'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, TrendingUp, Users, Award } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { icon: CheckCircle, label: 'Projects Completed', value: '35+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '300%' },
    { icon: Award, label: 'Years Experience', value: '5+' }
  ]

  const timeline = [
    { year: '2019', event: 'Founded Dynamic.IO', description: 'Started with a vision to revolutionize web development' },
    { year: '2020', event: 'First Major Client', description: 'Delivered our first enterprise-level project' },
    { year: '2021', event: 'Team Expansion', description: 'Grew to a team of talented developers and designers' },
    { year: '2022', event: 'Innovation Focus', description: 'Specialized in cutting-edge web technologies' },
    { year: '2023', event: 'Global Reach', description: 'Expanded to serve clients worldwide' },
    { year: '2024', event: 'AI Integration', description: 'Leading the charge in AI-powered web solutions' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-primary-500">Dynamic.IO</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're not only developers—we're digital architects crafting the future of web experiences. 
            Our mission is to transform ideas into powerful, and scalable digital solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white dark:bg-dark-card rounded-2xl p-8 md:p-12 shadow-xl mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                To empower businesses and individuals with cutting-edge web solutions that drive growth, 
                enhance user experiences, and push the boundaries of what's possible on the web.
              </p>
              <div className="space-y-4">
                {[
                  'Innovation-driven development',
                  'User-centric design philosophy',
                  'Performance optimization focus',
                  'Scalable architecture principles'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Why Choose Us?</h4>
                <ul className="space-y-3">
                  <li>✨ Cutting-edge technology stack</li>
                  <li>🚀 Lightning-fast development</li>
                  <li>🎨 Award-winning designs</li>
                  <li>📱 Mobile-first approach</li>
                  <li>🔧 Ongoing support & maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-purple-500 rounded-full" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + 0.1 * index }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-bg z-10 hidden md:block" />
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold text-primary-500 mb-2">{item.year}</div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.event}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 