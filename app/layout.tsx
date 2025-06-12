import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dynamic.IO - Premium Web Development Agency',
  description: 'Dynamic.IO builds sleek, performant websites and apps. Code. Design. Dominate.',
  keywords: 'web development, app development, browser extensions, modern websites, premium agency',
  openGraph: {
    title: 'Dynamic.IO - Premium Web Development Agency',
    description: 'Dynamic.IO builds sleek, performant websites and apps. Code. Design. Dominate.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 