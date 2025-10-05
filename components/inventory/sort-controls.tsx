'use client'

import { Squares2X2Icon, Bars3Icon } from '@heroicons/react/24/outline'

interface SortControlsProps {
  sortBy: string
  viewMode: 'grid' | 'list'
  onSortChange: (sort: string) => void
  onViewChange: (view: 'grid' | 'list') => void
  resultCount: number
}

export function SortControls({ sortBy, viewMode, onSortChange, onViewChange, resultCount }: SortControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">
          {resultCount} vehicle{resultCount !== 1 ? 's' : ''} found
        </span>
      </div>

      <div className="flex items-center space-x-4">
        {/* Sort dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm font-medium text-charcoal">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent text-sm"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="year-desc">Year: Newest First</option>
            <option value="year-asc">Year: Oldest First</option>
            <option value="mileage-asc">Mileage: Low to High</option>
            <option value="mileage-desc">Mileage: High to Low</option>
          </select>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => onViewChange('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm text-accent-blue' : 'text-gray-600 hover:text-charcoal'}`}
            aria-label="Grid view"
          >
            <Squares2X2Icon className="w-5 h-5" />
          </button>
          <button
            onClick={() => onViewChange('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm text-accent-blue' : 'text-gray-600 hover:text-charcoal'}`}
            aria-label="List view"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}