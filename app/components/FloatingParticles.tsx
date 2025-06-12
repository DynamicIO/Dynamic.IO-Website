'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles: HTMLDivElement[] = []
    const particleCount = 20

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle absolute opacity-30 dark:opacity-20'
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      
      // Random color (blue shades)
      const colors = ['bg-primary-400', 'bg-blue-400', 'bg-cyan-400', 'bg-purple-400']
      particle.className += ` ${colors[Math.floor(Math.random() * colors.length)]}`
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      
      container.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles
    particles.forEach((particle, index) => {
      const animateParticle = () => {
        const duration = Math.random() * 10000 + 5000 // 5-15 seconds
        const startX = parseFloat(particle.style.left)
        const startY = parseFloat(particle.style.top)
        
        const endX = Math.random() * 100
        const endY = Math.random() * 100
        
        particle.animate([
          {
            left: `${startX}%`,
            top: `${startY}%`,
            opacity: Math.random() * 0.3 + 0.1
          },
          {
            left: `${endX}%`,
            top: `${endY}%`,
            opacity: Math.random() * 0.3 + 0.1
          }
        ], {
          duration,
          easing: 'ease-in-out'
        }).onfinish = () => {
          particle.style.left = `${endX}%`
          particle.style.top = `${endY}%`
          animateParticle()
        }
      }
      
      // Stagger the start times
      setTimeout(() => animateParticle(), index * 100)
    })

    return () => {
      particles.forEach(particle => particle.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  )
} 