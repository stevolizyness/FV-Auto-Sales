'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { mockVehicles } from '@/lib/mock-data'
import { formatPrice, formatMileage } from '@/lib/utils'
import { PaymentEstimator } from '@/components/vehicle/payment-estimator'
import { VehicleGallery } from '@/components/vehicle/vehicle-gallery'
import { VehicleSpecs } from '@/components/vehicle/vehicle-specs'
import { CTAButtons } from '@/components/vehicle/cta-buttons'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function VehicleDetailPage({ params }: { params: { vin: string } }) {
  const vehicle = mockVehicles.find(v => v.vin === params.vin)

  if (!vehicle) {
    notFound()
  }

  const monthlyPayment = Math.round(vehicle.price / 60)

  // Schema markup for SEO
  const vehicleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
    brand: vehicle.make,
    model: vehicle.model,
    sku: vehicle.stockNumber,
    mpn: vehicle.vin,
    image: vehicle.images,
    description: `Clean ${vehicle.body} with great value. Financing available.`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: vehicle.price,
      availability: 'https://schema.org/InStock',
      url: `https://fvautosales.com/inventory/${vehicle.vin}`
    },
    vehicleIdentificationNumber: vehicle.vin,
    vehicleModelDate: vehicle.year,
    bodyType: vehicle.body,
    driveWheelConfiguration: vehicle.drivetrain,
    fuelType: 'Gasoline',
    mileageFromOdometer: {
      '@type': 'QuantitativeValue',
      value: vehicle.mileage,
      unitCode: 'SMI'
    },
    numberOfForwardGears: 6,
    vehicleTransmission: vehicle.transmission,
    engineDisplacement: {
      '@type': 'QuantitativeValue',
      value: vehicle.engine.split(' ')[0],
      unitCode: 'LTR'
    }
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container-max py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-accent-blue hover:text-accent-hover">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/inventory" className="text-accent-blue hover:text-accent-hover">
                Inventory
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </span>
            </nav>
          </div>
        </div>

        <div className="container-max py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Gallery */}
            <div className="lg:col-span-2">
              <VehicleGallery vehicle={vehicle} />
            </div>

            {/* Right Column - Details */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                {/* Vehicle Info */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-charcoal mb-2">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h1>
                  <p className="text-xl text-gray-600 mb-4">{vehicle.trim}</p>
                  
                  <div className="bg-accent-blue text-white px-4 py-2 rounded-lg inline-block mb-4">
                    <span className="text-2xl font-bold">{formatPrice(vehicle.price)}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Stock #:</span>
                      <span className="font-medium ml-2">{vehicle.stockNumber}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">VIN:</span>
                      <span className="font-medium ml-2">{vehicle.vin.slice(-8)}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Mileage:</span>
                      <span className="font-medium ml-2">{formatMileage(vehicle.mileage)}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium ml-2">{vehicle.location}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Estimator */}
                <div className="mb-6">
                  <PaymentEstimator vehicle={vehicle} />
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Key Features</h3>
                  <div className="space-y-2">
                    {vehicle.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <CTAButtons vehicle={vehicle} />
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 mt-6">
                  Prices do not include tax, tag, title, or doc fee. All financing on approved credit. 
                  Vehicle availability and pricing subject to change.
                </p>
              </div>
            </div>
          </div>

          {/* Vehicle Specifications */}
          <div className="mt-12">
            <VehicleSpecs vehicle={vehicle} />
          </div>
        </div>
      </div>
    </>
  )
}