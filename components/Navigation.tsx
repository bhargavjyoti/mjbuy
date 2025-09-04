'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'
// import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-5xl"
      >
        <div className="bg-white dark:bg-dark-800 rounded-full px-8 py-4 shadow-lg border border-gray-100 dark:border-dark-700">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
              {/* Use public/logo/logo.svg if present; falls back to box if missing */}
              <Image src="/logo/main_logo.png" alt="Logo" width={72} height={72} priority onError={() => {}} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 flex-1 justify-center mx-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2.5 rounded-full font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Theme Toggle & CTA Button */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <ThemeToggle />
              {/* Use anchor link to ensure it scrolls to the contact section on the homepage */}
              <Link 
                href="/#contact"
                className="bg-accent-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-accent-700 transition-colors duration-200 shadow-lg"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200"
            >
              {isOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 bg-white dark:bg-dark-800 rounded-3xl border border-gray-100 dark:border-dark-700 shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-200 font-semibold"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center justify-between mt-4">
                  <ThemeToggle />
                  {/* Mobile: link to homepage contact anchor and close menu */}
                  <Link 
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-700 transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navigation