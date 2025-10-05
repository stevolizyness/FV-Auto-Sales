import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckIcon, CreditCardIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: CheckIcon,
    title: 'All Credit Welcome',
    titleEs: 'Todos los créditos bienvenidos',
    description: 'Good credit, bad credit, no credit - we work with all situations',
    descriptionEs: 'Buen crédito, mal crédito, sin crédito - trabajamos con todas las situaciones'
  },
  {
    icon: ClockIcon,
    title: 'Quick Approval',
    titleEs: 'Aprobación rápida',
    description: 'Get approved in minutes, not hours or days',
    descriptionEs: 'Obtén aprobación en minutos, no horas o días'
  },
  {
    icon: CreditCardIcon,
    title: 'Low Down Payments',
    titleEs: 'Pagos iniciales bajos',
    description: 'Flexible down payment options to fit your budget',
    descriptionEs: 'Opciones flexibles de pago inicial para adaptarse a tu presupuesto'
  },
  {
    icon: UserGroupIcon,
    title: 'Bilingual Support',
    titleEs: 'Soporte bilingüe',
    description: 'Spanish-speaking staff to help with your financing needs',
    descriptionEs: 'Personal hispanohablante para ayudar con tus necesidades de financiamiento'
  }
]

export function FinancingTeaser() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
          >
            Flexible Financing Options
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get pre-approved today with our easy financing process
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue text-white rounded-full mb-6 group-hover:bg-accent-hover transition-colors duration-200">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {benefit.title}
                <span className="block text-sm text-accent-blue mt-1">
                  {benefit.titleEs}
                </span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
                <span className="block text-gray-500 italic mt-2">
                  {benefit.descriptionEs}
                </span>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold text-charcoal mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Complete our simple pre-approval form and get a decision in minutes. 
            No obligation, no impact on your credit score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/financing" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
              Apply for Financing
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/inventory" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center">
              Browse Inventory
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}