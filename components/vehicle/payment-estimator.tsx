'use client'

import { useState } from 'react'
import { Vehicle } from '@/lib/types'
import { formatPrice } from '@/lib/utils'

interface PaymentEstimatorProps {
  vehicle: Vehicle
}

export function PaymentEstimator({ vehicle }: PaymentEstimatorProps) {
  const [downPayment, setDownPayment] = useState(vehicle.price * 0.1)
  const [interestRate, setInterestRate] = useState(6.99)
  const [loanTerm, setLoanTerm] = useState(60)

  const calculateMonthlyPayment = () => {
    const principal = vehicle.price - downPayment
    const monthlyRate = interestRate / 100 / 12
    const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                    (Math.pow(1 + monthlyRate, loanTerm) - 1)
    return Math.round(payment)
  }

  const monthlyPayment = calculateMonthlyPayment()

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-charcoal mb-4">Payment Estimator</h3>
      
      <div className="space-y-4">
        {/* Down Payment */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Down Payment: {formatPrice(downPayment)}
          </label>
          <input
            type="range"
            min="0"
            max={vehicle.price}
            step="500"
            value={downPayment}
            onChange={(e) => setDownPayment(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$0</span>
            <span>{formatPrice(vehicle.price)}</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Interest Rate: {interestRate.toFixed(2)}%
          </label>
          <input
            type="range"
            min="1"
            max="25"
            step="0.25"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1%</span>
            <span>25%</span>
          </div>
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Loan Term: {loanTerm} months
          </label>
          <select
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
          >
            <option value="36">36 months</option>
            <option value="48">48 months</option>
            <option value="60">60 months</option>
            <option value="72">72 months</option>
            <option value="84">84 months</option>
          </select>
        </div>

        {/* Monthly Payment Display */}
        <div className="bg-accent-blue text-white rounded-lg p-4 text-center">
          <div className="text-sm text-blue-100">Estimated Monthly Payment</div>
          <div className="text-2xl font-bold">{formatPrice(monthlyPayment)}/mo</div>
          <div className="text-xs text-blue-200 mt-1">
            Based on {interestRate.toFixed(2)}% APR for {loanTerm} months
          </div>
        </div>

        <div className="text-xs text-gray-500 text-center">
          This is an estimate. Actual rates and payments may vary. 
          All financing subject to credit approval.
        </div>
      </div>
    </div>
  )
}