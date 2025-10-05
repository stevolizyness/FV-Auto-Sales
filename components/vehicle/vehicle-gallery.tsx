'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Vehicle } from '@/lib/types'

interface VehicleGalleryProps {
  vehicle: Vehicle
}

export function VehicleGallery({ vehicle }: VehicleGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={vehicle.images[selectedImage]}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail Gallery */}
      {vehicle.images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {vehicle.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-video rounded-lg overflow-hidden ${
                selectedImage === index ? 'ring-2 ring-accent-blue' : 'ring-1 ring-gray-200'
              }`}
            >
              <Image
                src={image}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model} - Thumbnail ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      <div className="text-center text-sm text-gray-600">
        {selectedImage + 1} of {vehicle.images.length} photos
      </div>
    </div>
  )
}