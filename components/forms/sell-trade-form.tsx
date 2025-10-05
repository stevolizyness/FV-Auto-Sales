'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'react-toastify'
import { PhotoIcon } from '@heroicons/react/24/outline'

const schema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  year: z.string().min(4, 'Year is required'),
  make: z.string().min(2, 'Make is required'),
  model: z.string().min(2, 'Model is required'),
  mileage: z.string().min(1, 'Mileage is required'),
  condition: z.string().min(1, 'Condition is required'),
  vin: z.string().optional(),
  photos: z.any().optional(),
  additionalInfo: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must consent to be contacted')
})

type FormData = z.infer<typeof schema>

export function SellTradeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length + uploadedFiles.length > 6) {
      toast.error('Maximum 6 photos allowed')
      return
    }
    setUploadedFiles([...uploadedFiles, ...files])
  }

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call with file upload
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      toast.success('Thank you! We\'ll review your vehicle information and contact you with an offer within 24 hours.')
      reset()
      setUploadedFiles([])
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Information */}
        <div>
          <h3 className="text-xl font-semibold text-charcoal mb-6">Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                First Name *
              </label>
              <input
                {...register('firstName')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="John"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Last Name *
              </label>
              <input
                {...register('lastName')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Email Address *
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Phone Number *
              </label>
              <input
                {...register('phone')}
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Vehicle Information */}
        <div>
          <h3 className="text-xl font-semibold text-charcoal mb-6">Vehicle Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Year *
              </label>
              <select
                {...register('year')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              >
                <option value="">Select Year</option>
                {Array.from({ length: 25 }, (_, i) => {
                  const year = new Date().getFullYear() - i
                  return <option key={year} value={year.toString()}>{year}</option>
                })}
              </select>
              {errors.year && (
                <p className="mt-1 text-sm text-red-600">{errors.year.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Make *
              </label>
              <input
                {...register('make')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="Toyota, Honda, Ford, etc."
              />
              {errors.make && (
                <p className="mt-1 text-sm text-red-600">{errors.make.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Model *
              </label>
              <input
                {...register('model')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="Camry, Civic, F-150, etc."
              />
              {errors.model && (
                <p className="mt-1 text-sm text-red-600">{errors.model.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Mileage *
              </label>
              <input
                {...register('mileage')}
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="75000"
              />
              {errors.mileage && (
                <p className="mt-1 text-sm text-red-600">{errors.mileage.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Vehicle Condition *
              </label>
              <select
                {...register('condition')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              >
                <option value="">Select Condition</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
                <option value="not-running">Not Running</option>
              </select>
              {errors.condition && (
                <p className="mt-1 text-sm text-red-600">{errors.condition.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                VIN (Optional)
              </label>
              <input
                {...register('vin')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="17-digit VIN"
              />
            </div>
          </div>
        </div>

        {/* Photos Upload */}
        <div>
          <h3 className="text-xl font-semibold text-charcoal mb-6">Vehicle Photos</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <PhotoIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">
              Upload up to 6 photos of your vehicle
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Include exterior, interior, and any damage or issues
            </p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="btn-secondary cursor-pointer inline-block"
            >
              Choose Photos
            </label>
          </div>

          {uploadedFiles.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-medium text-charcoal mb-3">Uploaded Photos ({uploadedFiles.length}/6)</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Uploaded photo ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Additional Information (Optional)
          </label>
          <textarea
            {...register('additionalInfo')}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
            placeholder="Tell us about any additional features, recent repairs, or issues with the vehicle..."
          />
        </div>

        {/* Consent */}
        <div className="flex items-start space-x-3">
          <div className="flex items-center h-5">
            <input
              {...register('consent')}
              type="checkbox"
              className="w-4 h-4 text-accent-blue border-gray-300 rounded focus:ring-accent-blue"
            />
          </div>
          <div className="text-sm text-gray-600">
            <label className="font-medium text-charcoal">
              I consent to be contacted by FV Auto Sales about this vehicle valuation request. 
              I understand that standard messaging rates may apply for SMS communications.
            </label>
            {errors.consent && (
              <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
            )}
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Getting Your Offer...
              </>
            ) : (
              'Get My Offer'
            )}
          </button>
        </div>

        <div className="text-xs text-gray-500 text-center">
          We'll review your vehicle information and contact you with an offer within 24 hours. 
          For immediate assistance, please call (786) 600-5536.
        </div>
      </form>
    </div>
  )
}