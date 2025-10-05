'use client'

import { Vehicle } from '@/lib/types'

interface CTAButtonsProps {
  vehicle: Vehicle
}

export function CTAButtons({ vehicle }: CTAButtonsProps) {
  return (
    <div className="space-y-3">
      <button className="w-full btn-primary text-lg py-3">
        Apply for Financing
      </button>
      
      <button className="w-full btn-secondary text-lg py-3">
        Schedule Test Drive
      </button>
      
      <div className="grid grid-cols-2 gap-3">
        <button className="btn-secondary text-sm py-2">
          Get Trade-In Value
        </button>
        <button className="btn-secondary text-sm py-2">
          Request Info
        </button>
      </div>
      
      <a
        href={`https://wa.me/17866005536?text=I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (Stock #${vehicle.stockNumber})`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center block"
      >
        Chat on WhatsApp
      </a>
    </div>
  )
}