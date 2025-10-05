'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-4">500</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-4">
            Something Went Wrong
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            We apologize for the inconvenience. Our team has been notified and we're working to fix the issue.
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 mt-4">
              Error ID: {error.digest}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Try Again
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>

            <Link href="/" className="btn-secondary">
              Go to Home
            </Link>
          </div>

          <div className="text-sm text-gray-500">
            If the problem persists, please contact us at{' '}
            <a href="tel:+17866005536" className="text-accent-blue hover:text-accent-hover">
              (786) 600-5536
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}