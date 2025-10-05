'use client'

import Link from 'next/link'
import { VehicleCard } from '@/components/ui/vehicle-card'
import { mockVehicles } from '@/lib/mock-data'
import { motion } from 'framer-motion'

export function FeaturedInventory() {
  const featuredVehicles = mockVehicles.filter(vehicle => vehicle.featured).slice(0, 6)

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Featured Inventory
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check out our latest arrivals and special offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.vin}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/inventory" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
            View All Inventory
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}