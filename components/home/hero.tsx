'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Premium used cars at FV Auto Sales"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal bg-opacity-60" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Central Florida Used Cars
              <span className="block text-accent-blue">Buy • Sell • Trade</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Financing available. We buy any car. 
              <span className="text-accent-blue font-semibold">Se habla Español.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 flex-wrap"
          >
            <Link href="/inventory" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
              Shop Inventory
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/financing" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center bg-white bg-opacity-10 text-white border-white border-opacity-20 hover:bg-opacity-20">
              Apply for Financing
            </Link>
            <Link href="/auction-access" className="btn-ghost text-lg px-8 py-4 inline-flex items-center justify-center text-white hover:text-accent-blue">
              Auction Access ($300/car)
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}