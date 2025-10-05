import Link from 'next/link'
import Image from 'next/image'
import { Vehicle } from '@/lib/types'
import { formatPrice, formatMileage } from '@/lib/utils'

interface VehicleCardProps {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="card group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={vehicle.images[0]}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          {vehicle.featured && (
            <span className="bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Financing Available
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-charcoal mb-2">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-gray-600 mb-4">{vehicle.trim}</p>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Mileage:</span>
            <span className="font-medium">{formatMileage(vehicle.mileage)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Engine:</span>
            <span className="font-medium">{vehicle.engine}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Transmission:</span>
            <span className="font-medium">{vehicle.transmission}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-accent-blue">
              {formatPrice(vehicle.price)}
            </span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Est. Payment</div>
            <div className="font-semibold text-charcoal">
              ${Math.round(vehicle.price / 60)}/mo
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          <Link
            href={`/inventory/${vehicle.vin}`}
            className="flex-1 btn-primary text-center text-sm py-2"
          >
            View Details
          </Link>
          <Link
            href="/financing"
            className="flex-1 btn-secondary text-center text-sm py-2"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  )
}