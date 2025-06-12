'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Smartphone, Box, MessageCircle, Zap, Shield, Palette, Database } from 'lucide-react'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleServiceClick = (serviceTitle: string) => {
    // Store the selected service in sessionStorage
    sessionStorage.setItem('selectedService', serviceTitle)
    
    // Scroll to contact section
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    
    // Dispatch a custom event to notify the Contact component
    window.dispatchEvent(new CustomEvent('serviceSelected', { detail: serviceTitle }))
  }

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Full-Stack Development', 'Performance Optimization', 'SEO Implementation'],
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      features: ['Progressive Web Apps', 'Cross-Platform Solutions', 'Native Performance', 'App Store Optimization'],
      color: 'green'
    },
    {
      icon: Box,
      title: '3D Development',
      description: 'Immersive 3D experiences and interactive visualizations that bring your ideas to life in stunning detail.',
      features: ['3D Web Experiences', 'Interactive Visualizations', 'WebGL & Three.js', 'AR/VR Solutions'],
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'Consulting',
      description: 'Strategic technology consulting to help businesses make informed decisions about their digital transformation.',
      features: ['Technology Strategy', 'Architecture Planning', 'Code Reviews', 'Performance Audits'],
      color: 'orange'
    }
  ]

  const additionalServices = [
    { icon: Zap, title: 'Performance Optimization', description: 'Lightning-fast loading times' },
    { icon: Shield, title: 'Security Implementation', description: 'Enterprise-grade security measures' },
    { icon: Palette, title: 'UI/UX Design', description: 'Beautiful and intuitive interfaces' },
    { icon: Database, title: 'Database Architecture', description: 'Scalable data solutions' }
  ]

  const colorClasses = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-red-500'
  }

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
            Our <span className="text-primary-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to your business needs, 
            from concept to deployment and beyond.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service.title)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + 0.1 * featureIndex }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} rounded-full`} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Additional Expertise
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + 0.1 * index }}
                className="group text-center cursor-pointer"
                onClick={() => handleServiceClick(service.title)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can bring your vision to life with our expertise and passion.
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 