'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'react-toastify'
import { CheckIcon } from '@heroicons/react/24/outline'

const schema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  targetCar: z.string().min(5, 'Please describe the car you\'re looking for'),
  budget: z.string().min(1, 'Budget range is required'),
  timeframe: z.string().min(1, 'Timeframe is required'),
  consent: z.boolean().refine(val => val === true, 'You must consent to be contacted')
})

type FormData = z.infer<typeof schema>

export function AuctionAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Thank you! We\'ll contact you within 24 hours to discuss your auction access request.')
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Target Vehicle Description *
          </label>
          <textarea
            {...register('targetCar')}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
            placeholder="Example: 2018-2020 Honda Accord, under 50k miles, any color, budget $15,000-$18,000"
          />
          {errors.targetCar && (
            <p className="mt-1 text-sm text-red-600">{errors.targetCar.message}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Budget Range *
            </label>
            <select
              {...register('budget')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
            >
              <option value="">Select budget range</option>
              <option value="under-10000">Under $10,000</option>
              <option value="10000-15000">$10,000 - $15,000</option>
              <option value="15000-20000">$15,000 - $20,000</option>
              <option value="20000-25000">$20,000 - $25,000</option>
              <option value="25000-30000">$25,000 - $30,000</option>
              <option value="30000-40000">$30,000 - $40,000</option>
              <option value="over-40000">Over $40,000</option>
            </select>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Timeframe *
            </label>
            <select
              {...register('timeframe')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
            >
              <option value="">Select timeframe</option>
              <option value="asap">ASAP</option>
              <option value="1-2-weeks">1-2 weeks</option>
              <option value="1-month">Within 1 month</option>
              <option value="2-3-months">2-3 months</option>
              <option value="flexible">Flexible</option>
            </select>
            {errors.timeframe && (
              <p className="mt-1 text-sm text-red-600">{errors.timeframe.message}</p>
            )}
          </div>
        </div>

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
              I consent to be contacted by FV Auto Sales about this auction access request.
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
                Submitting...
              </>
            ) : (
              'Start My Auction Access Request'
            )}
          </button>
        </div>

        <div className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service. 
          We'll contact you within 24 hours to discuss your auction access request.
        </div>
      </form>
    </div>
  )
}