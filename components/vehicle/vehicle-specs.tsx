import { Vehicle } from '@/lib/types'
import { formatMileage } from '@/lib/utils'

interface VehicleSpecsProps {
  vehicle: Vehicle
}

export function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  const specs = [
    { label: 'Year', value: vehicle.year.toString() },
    { label: 'Make', value: vehicle.make },
    { label: 'Model', value: vehicle.model },
    { label: 'Trim', value: vehicle.trim },
    { label: 'Body Style', value: vehicle.body },
    { label: 'Drivetrain', value: vehicle.drivetrain },
    { label: 'Engine', value: vehicle.engine },
    { label: 'Transmission', value: vehicle.transmission },
    { label: 'Exterior Color', value: vehicle.exteriorColor },
    { label: 'Interior Color', value: vehicle.interiorColor },
    { label: 'Mileage', value: formatMileage(vehicle.mileage) },
    { label: 'VIN', value: vehicle.vin },
    { label: 'Stock Number', value: vehicle.stockNumber },
    { label: 'Location', value: vehicle.location },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-charcoal mb-6">Vehicle Specifications</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-semibold text-charcoal mb-4">Basic Information</h3>
          <div className="space-y-3">
            {specs.slice(0, 7).map((spec, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">{spec.label}:</span>
                <span className="font-medium text-charcoal">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Details */}
        <div>
          <h3 className="text-lg font-semibold text-charcoal mb-4">Additional Details</h3>
          <div className="space-y-3">
            {specs.slice(7).map((spec, index) => (
              <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">{spec.label}:</span>
                <span className="font-medium text-charcoal">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-charcoal mb-4">Features & Options</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicle.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-accent-blue rounded-full mr-3"></div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle History */}
      {vehicle.carfaxUrl && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-charcoal mb-4">Vehicle History</h3>
          <p className="text-gray-600 mb-4">
            Get a complete vehicle history report to learn more about this vehicle's past.
          </p>
          <a
            href={vehicle.carfaxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View Vehicle History Report
          </a>
        </div>
      )}
    </div>
  )
}