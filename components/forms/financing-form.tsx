'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'react-toastify'

const schema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  ssn: z.string().min(9, 'Social Security Number is required'),
  monthlyIncome: z.string().min(1, 'Monthly income is required'),
  employer: z.string().optional(),
  jobTitle: z.string().optional(),
  employmentLength: z.string().optional(),
  housingType: z.string().min(1, 'Housing type is required'),
  monthlyHousingPayment: z.string().optional(),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().min(5, 'ZIP code is required'),
  downPayment: z.string().min(1, 'Down payment amount is required'),
  vehiclePriceRange: z.string().min(1, 'Vehicle price range is required'),
  consent: z.boolean().refine(val => val === true, 'You must consent to the credit check'),
  privacyConsent: z.boolean().refine(val => val === true, 'You must agree to the privacy policy')
})

type FormData = z.infer<typeof schema>

export function FinancingForm() {
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
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      toast.success('Application submitted successfully! We\'ll contact you within 24 hours with your financing options.')
      reset()
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
          <h3 className="text-xl font-semibold text-charcoal mb-6">Personal Information</h3>
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

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Date of Birth *
              </label>
              <input
                {...register('dateOfBirth')}
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              />
              {errors.dateOfBirth && (
                <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Social Security Number *
              </label>
              <input
                {...register('ssn')}
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="XXX-XX-XXXX"
              />
              {errors.ssn && (
                <p className="mt-1 text-sm text-red-600">{errors.ssn.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div>
          <h3 className="text-xl font-semibold text-charcoal mb-6">Address Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-charcoal mb-2">
                Street Address *
              </label>
              <input
                {...register('address')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="123 Main Street"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                City *
              </label>
              <input
                {...register('city')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="Orlando"
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                State *
              </label>
              <select
                {...register('state')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              >
                <option value="">Select State</option>
                <option value="FL">Florida</option>
                <option value="AL">Alabama</option>
                <option value="GA">Georgia</option>
                <option value="SC">South Carolina</option>
                <option value="NC">North Carolina</option>
                <option value="VA">Virginia</option>
                <option value="TN">Tennessee</option>
                <option value="KY">Kentucky</option>
                <option value="WV">West Virginia</option>
                <option value="MS">Mississippi</option>
                <option value="LA">Louisiana</option>
                <option value="AR">Arkansas</option>
                <option value="OK">Oklahoma</option>
                <option value="TX">Texas</option>
                <option value="NM">New Mexico</option>
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="NV">Nevada</option>
                <option value="UT">Utah</option>
                <option value="CO">Colorado</option>
                <option value="WY">Wyoming</option>
                <option value="MT">Montana</option>
                <option value="ID">Idaho</option>
                <option value="WA">Washington</option>
                <option value="OR">Oregon</option>
                <option value="ND">North Dakota</option>
                <option value="SD">South Dakota</option>
                <option value="NE">Nebraska</option>
                <option value="KS">Kansas</option>
                <option value="MN">Minnesota</option>
                <option value="IA">Iowa</option>
                <option value="MO">Missouri</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="OH">Ohio</option>
                <option value="MI">Michigan</option>
                <option value="WI">Wisconsin</option>
                <option value="PA">Pennsylvania</option>
                <option value="NY">New York</option>
                <option value="VT">Vermont</option>
                <option value="NH">New Hampshire</option>
                <option value="ME">Maine</option>
                <option value="MA">Massachusetts</option>
                <option value="RI">Rhode Island</option>
                <option value="CT">Connecticut</option>
                <option value="NJ">New Jersey</option>
                <option value="DE">Delaware</option>
                <option value="MD">Maryland</option>
                <option value="DC">District of Columbia</option>
                <option value="HI">Hawaii</option>
                <option value="AK">Alaska</option>
              </select>
              {errors.state && (
                <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                ZIP Code *
              </label>
              <input
                {...register('zipCode')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="32801"
              />
              {errors.zipCode && (
                <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Employment Information */}
        <div>
          <h3 className="text-xl font-semibold text-charcoal mb-6">Employment Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Monthly Income (Before Taxes) *
              </label>
              <select
                {...register('monthlyIncome')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              >
                <option value="">Select Income Range</option>
                <option value="under-2000">Under $2,000</option>
                <option value="2000-3000">$2,000 - $3,000</option>
                <option value="3000-4000">$3,000 - $4,000</option>
                <option value="4000-5000">$4,000 - $5,000</option>
                <option value="5000-6000">$5,000 - $6,000</option>
                <option value="6000-8000">$6,000 - $8,000</option>
                <option value="8000-10000">$8,000 - $10,000</option>
                <option value="over-10000">Over $10,000</option>
              </select>
              {errors.monthlyIncome && (
                <p className="mt-1 text-sm text-red-600">{errors.monthlyIncome.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Housing Type *
              </label>
              <select
                {...register('housingType')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              >
                <option value="">Select Housing Type</option>
                <option value="own">Own</option>
                <option value="rent">Rent</option>
                <option value="live-with-family">Live with Family</option>
                <option value="other">Other</option>
              </select>
              {errors.housingType && (
                <p className="mt-1 text-sm text-red-600">{errors.housingType.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Current Employer
              </label>
              <input
                {...register('employer')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Job Title
              </label>
              <input
                {...register('jobTitle')}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="Your Position"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Preferences */}
        <div>
          <h3 className="text-xl font-semibold text-charcoal mb-6">Vehicle Preferences</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Down Payment Amount *
              </label>
              <select
                {...register('downPayment')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              >
                <option value="">Select Down Payment</option>
                <option value="0-1000">$0 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000-3000">$2,000 - $3,000</option>
                <option value="3000-5000">$3,000 - $5,000</option>
                <option value="5000-7500">$5,000 - $7,500</option>
                <option value="7500-10000">$7,500 - $10,000</option>
                <option value="over-10000">Over $10,000</option>
              </select>
              {errors.downPayment && (
                <p className="mt-1 text-sm text-red-600">{errors.downPayment.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Vehicle Price Range *
              </label>
              <select
                {...register('vehiclePriceRange')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              >
                <option value="">Select Price Range</option>
                <option value="under-10000">Under $10,000</option>
                <option value="10000-15000">$10,000 - $15,000</option>
                <option value="15000-20000">$15,000 - $20,000</option>
                <option value="20000-25000">$20,000 - $25,000</option>
                <option value="25000-30000">$25,000 - $30,000</option>
                <option value="30000-40000">$30,000 - $40,000</option>
                <option value="over-40000">Over $40,000</option>
              </select>
              {errors.vehiclePriceRange && (
                <p className="mt-1 text-sm text-red-600">{errors.vehiclePriceRange.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-4">
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
                I authorize FV Auto Sales and its lending partners to obtain a consumer credit report 
                and verify my credit and employment information for the purpose of evaluating my 
                credit application. *
              </label>
              {errors.consent && (
                <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex items-center h-5">
              <input
                {...register('privacyConsent')}
                type="checkbox"
                className="w-4 h-4 text-accent-blue border-gray-300 rounded focus:ring-accent-blue"
              />
            </div>
            <div className="text-sm text-gray-600">
              <label className="font-medium text-charcoal">
                I have read and agree to the Privacy Policy and Terms of Service. 
                I understand that standard messaging rates may apply for SMS communications. *
              </label>
              {errors.privacyConsent && (
                <p className="mt-1 text-sm text-red-600">{errors.privacyConsent.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6">
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
                Submitting Application...
              </>
            ) : (
              'Submit Financing Application'
            )}
          </button>
        </div>

        <div className="text-xs text-gray-500 text-center">
          This is a secure application. Your personal information is protected and will only be used 
          for the purpose of evaluating your financing application. We'll contact you within 24 hours.
        </div>
      </form>
    </div>
  )
}