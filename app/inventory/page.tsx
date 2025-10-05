'use client'

import { useState, useMemo } from 'react'
import { VehicleCard } from '@/components/ui/vehicle-card'
import { FilterPanel } from '@/components/inventory/filter-panel'
import { SortControls } from '@/components/inventory/sort-controls'
import { mockVehicles } from '@/lib/mock-data'
import { Vehicle } from '@/lib/types'
import { motion } from 'framer-motion'

interface Filters {
  make: string
  model: string
  year: string
  priceRange: [number, number]
  body: string
  drivetrain: string
  transmission: string
  fuelType: string
  mileage: string
}

export default function InventoryPage() {
  const [filters, setFilters] = useState<Filters>({
    make: '',
    model: '',
    year: '',
    priceRange: [0, 100000],
    body: '',
    drivetrain: '',
    transmission: '',
    fuelType: '',
    mileage: ''
  })

  const [sortBy, setSortBy] = useState('price-asc')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredVehicles = useMemo(() => {
    let filtered = mockVehicles.filter((vehicle) => {
      if (filters.make && vehicle.make !== filters.make) return false
      if (filters.model && vehicle.model !== filters.model) return false
      if (filters.year && vehicle.year.toString() !== filters.year) return false
      if (filters.body && vehicle.body !== filters.body) return false
      if (filters.drivetrain && vehicle.drivetrain !== filters.drivetrain) return false
      if (filters.transmission && vehicle.transmission !== filters.transmission) return false
      if (vehicle.price < filters.priceRange[0] || vehicle.price > filters.priceRange[1]) return false
      
      if (filters.mileage) {
        const mileage = vehicle.mileage
        switch (filters.mileage) {
          case '0-50000':
            if (mileage > 50000) return false
            break
          case '50000-100000':
            if (mileage < 50000 || mileage > 100000) return false
            break
          case '100000-150000':
            if (mileage < 100000 || mileage > 150000) return false
            break
          case '150000+':
            if (mileage < 150000) return false
            break
        }
      }
      
      return true
    })

    // Sort vehicles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'year-desc':
          return b.year - a.year
        case 'year-asc':
          return a.year - b.year
        case 'mileage-asc':
          return a.mileage - b.mileage
        case 'mileage-desc':
          return b.mileage - a.mileage
        default:
          return 0
      }
    })

    return filtered
  }, [filters, sortBy])

  const availableModels = useMemo(() => {
    if (!filters.make) return []
    return [...new Set(mockVehicles.filter(v => v.make === filters.make).map(v => v.model))]
  }, [filters.make])

  const handleFilterChange = (key: keyof Filters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      ...(key === 'make' && { model: '' }) // Reset model when make changes
    }))
  }

  const clearFilters = () => {
    setFilters({
      make: '',
      model: '',
      year: '',
      priceRange: [0, 100000],
      body: '',
      drivetrain: '',
      transmission: '',
      fuelType: '',
      mileage: ''
    })
  }

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Inventory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect vehicle from our selection of quality used cars
            </p>
          </div>
        </div>
      </section>

      <div className="container-max py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Panel */}
          <div className="lg:w-1/4">
            <FilterPanel
              filters={filters}
              availableModels={availableModels}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort Controls */}
            <SortControls
              sortBy={sortBy}
              viewMode={viewMode}
              onSortChange={setSortBy}
              onViewChange={setViewMode}
              resultCount={filteredVehicles.length}
            />

            {/* Vehicle Grid */}
            {filteredVehicles.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`grid gap-6 mt-8 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                    : 'grid-cols-1'
                }`}
              >
                {filteredVehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.vin}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <VehicleCard vehicle={vehicle} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 mb-4">
                  <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V3a1 1 0 00-1-1H10a1 1 0 00-1 1v3.306m6 0a8.003 8.003 0 015.326 4.33M3.675 10.636a8.003 8.003 0 015.326-4.33" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-charcoal mb-2">
                  No vehicles found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters to see more results
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}