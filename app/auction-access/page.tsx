'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MagnifyingGlassIcon, 
  BanknotesIcon, 
  CheckCircleIcon, 
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { AuctionAccessForm } from '@/components/forms/auction-access-form'

const steps = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Tell us your target car and budget',
    titleEs: 'Cuéntanos el auto y tu presupuesto',
    description: 'Share exactly what vehicle you\'re looking for and your budget range. We\'ll help you find the best options.',
    descriptionEs: 'Comparte exactamente qué vehículo buscas y tu rango de presupuesto. Te ayudaremos a encontrar las mejores opciones.'
  },
  {
    icon: BanknotesIcon,
    title: 'We bid at dealer auctions on your behalf',
    titleEs: 'Nosotros ofertamos en subastas de distribuidores por ti',
    description: 'Our experienced team accesses dealer-only auctions and places strategic bids to get you the best price.',
    descriptionEs: 'Nuestro equipo experimentado accede a subastas solo para distribuidores y realiza ofertas estratégicas para obtener el mejor precio.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'You pay $300 per car access fee + auction price',
    titleEs: 'Pagas $300 por tarifa de acceso + precio de subasta',
    description: 'Our flat $300 fee covers our auction access and bidding service. You pay the final auction price plus any transport costs.',
    descriptionEs: 'Nuestra tarifa plana de $300 cubre nuestro acceso a subastas y servicio de ofertas. Pagas el precio final de la subasta más cualquier costo de transporte.'
  },
  {
    icon: TruckIcon,
    title: 'Pickup or delivery arranged',
    titleEs: 'Recogida o entrega organizada',
    description: 'We coordinate vehicle pickup from the auction location or arrange delivery to our Orlando dealership.',
    descriptionEs: 'Coordinamos la recogida del vehículo desde la ubicación de la subasta o organizamos la entrega a nuestro concesionario en Orlando.'
  }
]

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'Wholesale Pricing',
    titleEs: 'Precios de Mayoreo',
    description: 'Save thousands compared to retail prices',
    descriptionEs: 'Ahorra miles comparado con precios de venta al público'
  },
  {
    icon: ClockIcon,
    title: 'Fast Process',
    titleEs: 'Proceso Rápido',
    description: 'Get your car in as little as 1-2 weeks',
    descriptionEs: 'Obtén tu auto en tan solo 1-2 semanas'
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Huge Selection',
    titleEs: 'Gran Selección',
    description: 'Access to thousands of vehicles nationwide',
    descriptionEs: 'Acceso a miles de vehículos a nivel nacional'
  }
]

const faqs = [
  {
    question: 'How does the $300 fee work?',
    questionEs: '¿Cómo funciona la tarifa de $300?',
    answer: 'The $300 fee is our service charge for accessing dealer auctions and placing bids on your behalf. This fee is paid regardless of whether we successfully win the auction.',
    answerEs: 'La tarifa de $300 es nuestro cargo de servicio por acceder a subastas de distribuidores y realizar ofertas en tu nombre. Esta tarifa se paga independientemente de si ganamos la subasta.'
  },
  {
    question: 'What if the auction price is higher than my budget?',
    questionEs: '¿Qué pasa si el precio de la subasta es mayor que mi presupuesto?',
    answer: 'We never exceed your maximum budget. You set the highest price you\'re willing to pay, and we only bid up to that amount.',
    answerEs: 'Nunca excedemos tu presupuesto máximo. Estableces el precio más alto que estás dispuesto a pagar, y solo ofertamos hasta esa cantidad.'
  },
  {
    question: 'Can I inspect the vehicle before bidding?',
    questionEs: '¿Puedo inspeccionar el vehículo antes de ofertar?',
    answer: 'Most auctions provide detailed condition reports and photos. We can also arrange for third-party inspections at an additional cost.',
    answerEs: 'La mayoría de las subastas proporcionan informes detallados de condición y fotos. También podemos organizar inspecciones de terceros con un costo adicional.'
  },
  {
    question: 'What additional costs should I expect?',
    questionEs: '¿Qué costos adicionales debo esperar?',
    answer: 'Additional costs may include auction fees (typically $200-400), transportation costs, and standard DMV fees for title and registration.',
    answerEs: 'Los costos adicionales pueden incluir tarifas de subasta (típicamente $200-400), costos de transporte, y tarifas estándar del DMV para título y registro.'
  }
]

export default function AuctionAccessPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
            >
              Auction Access Program
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Get wholesale pricing on any car through our dealer auction access. 
              Save thousands compared to retail prices.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg inline-block"
            >
              <div className="text-5xl font-bold text-accent-blue mb-2">$300</div>
              <div className="text-gray-600 text-lg">Per Car Access Fee</div>
              <div className="text-sm text-gray-500 mt-2">Tarifa de acceso por auto</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to get your dream car at wholesale prices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-accent-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-accent-blue text-accent-blue rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {step.title}
                  <span className="block text-sm text-accent-blue mt-1">
                    {step.titleEs}
                  </span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                  <span className="block text-gray-500 italic mt-2">
                    {step.descriptionEs}
                  </span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why Choose Auction Access?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-accent-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {benefit.title}
                  <span className="block text-sm text-accent-blue mt-1">
                    {benefit.titleEs}
                  </span>
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                  <span className="block text-gray-500 italic mt-2">
                    {benefit.descriptionEs}
                  </span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      {faq.question}
                      <span className="block text-sm text-accent-blue mt-1">
                        {faq.questionEs}
                      </span>
                    </h3>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      activeFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                      <span className="block text-gray-500 italic mt-2">
                        {faq.answerEs}
                      </span>
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-blue text-white">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Perfect Car?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Start your auction access journey today and save thousands on your next vehicle
            </p>
            <Link href="#inquiry-form" className="btn-secondary text-lg px-8 py-4 inline-flex items-center">
              Get Started Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Start Your Auction Access Request
              </h2>
              <p className="text-xl text-gray-600">
                Tell us about the car you're looking for and we'll help you find it at auction
              </p>
            </div>
            <AuctionAccessForm />
          </div>
        </div>
      </section>
    </div>
  )
}