'use client'

import { useState } from 'react'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { getYearsArray, getMakes, getBodyTypes, getDrivetrainTypes, getTransmissionTypes } from '@/lib/utils'

interface FilterPanelProps {
  filters: any
  availableModels: string[]
  onFilterChange: (key: string, value: any) => void
  onClearFilters: () => void
}

export function FilterPanel({ filters, availableModels, onFilterChange, onClearFilters }: FilterPanelProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-charcoal">Filters</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-accent-blue hover:text-accent-hover"
        >
          Clear All
        </button>
      </div>

      {/* Make */}
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Make
        </label>
        <select
          value={filters.make}
          onChange={(e) => onFilterChange('make', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
        >
          <option value="">All Makes</option>
          {getMakes().map(make => (
            <option key={make} value={make}>{make}</option>
          ))}
        </select>
      </div>

      {/* Model */}
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Model
        </label>
        <select
          value={filters.model}
          onChange={(e) => onFilterChange('model', e.target.value)}
          disabled={!filters.make}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <option value="">All Models</option>
          {availableModels.map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
      </div>

      {/* Year */}
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Year
        </label>
        <select
          value={filters.year}
          onChange={(e) => onFilterChange('year', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
        >
          <option value="">All Years</option>
          {getYearsArray().map(year => (
            <option key={year} value={year.toString()}>{year}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Price Range
        </label>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="100000"
            step="1000"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>${filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Body Type */}
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Body Type
        </label>
        <select
          value={filters.body}
          onChange={(e) => onFilterChange('body', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
        >
          <option value="">All Types</option>
          {getBodyTypes().map(body => (
            <option key={body} value={body}>{body}</option>
          ))}
        </select>
      </div>

      {/* Mileage */}
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Mileage
        </label>
        <select
          value={filters.mileage}
          onChange={(e) => onFilterChange('mileage', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
        >
          <option value="">Any Mileage</option>
          <option value="0-50000">Under 50,000</option>
          <option value="50000-100000">50,000 - 100,000</option>
          <option value="100000-150000">100,000 - 150,000</option>
          <option value="150000+">Over 150,000</option>
        </select>
      </div>

      {/* Drivetrain */}
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Drivetrain
        </label>
        <select
          value={filters.drivetrain}
          onChange={(e) => onFilterChange('drivetrain', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
        >
          <option value="">All Drivetrains</option>
          {getDrivetrainTypes().map(drivetrain => (
            <option key={drivetrain} value={drivetrain}>{drivetrain}</option>
          ))}
        </select>
      </div>

      {/* Transmission */}
      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Transmission
        </label>
        <select
          value={filters.transmission}
          onChange={(e) => onFilterChange('transmission', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
        >
          <option value="">All Transmissions</option>
          {getTransmissionTypes().map(transmission => (
            <option key={transmission} value={transmission}>{transmission}</option>
          ))}
        </select>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile filter button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden w-full mb-4 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-charcoal hover:bg-gray-50"
      >
        <FunnelIcon className="w-5 h-5 mr-2" />
        Filters
        <ChevronDownIcon className={`w-5 h-5 ml-2 transform transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Mobile filter panel */}
      <div className={`lg:hidden ${mobileOpen ? 'block' : 'hidden'} mb-6`}>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <FilterContent />
        </div>
      </div>

      {/* Desktop filter panel */}
      <div className="hidden lg:block bg-white rounded-lg p-6 shadow-sm">
        <FilterContent />
      </div>
    </>
  )
}