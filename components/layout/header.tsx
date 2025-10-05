'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Inventory', href: '/inventory' },
  { name: 'Auction Access', href: '/auction-access' },
  { name: 'Financing', href: '/financing' },
  { name: 'Sell/Trade', href: '/sell-trade' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with bilingual notice */}
      <div className="bg-accent-blue text-white">
        <div className="container-max">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Se habla Español</span>
              <span>•</span>
              <a href="https://wa.me/17866005536" className="hover:underline flex items-center">
                <PhoneIcon className="w-4 h-4 mr-1" />
                Hablamos por WhatsApp
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-1" />
                Orlando, FL
              </span>
              <a href="tel:+17866005536" className="hover:underline font-medium">
                (786) 600-5536
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-charcoal">
              FV <span className="text-accent-blue">Auto Sales</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-accent-blue'
                    : 'text-charcoal hover:text-accent-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/financing" className="btn-ghost text-sm">
              Apply for Financing
            </Link>
            <Link href="/inventory" className="btn-primary text-sm">
              Shop Inventory
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-charcoal" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container-max py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-lg font-medium py-2 ${
                    pathname === item.href
                      ? 'text-accent-blue'
                      : 'text-charcoal hover:text-accent-blue'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link
                  href="/financing"
                  className="block w-full btn-secondary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply for Financing
                </Link>
                <Link
                  href="/inventory"
                  className="block w-full btn-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop Inventory
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}