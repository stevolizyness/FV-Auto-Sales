'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CurrencyDollarIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { SellTradeForm } from '@/components/forms/sell-trade-form'

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Fair Market Value',
    titleEs: 'Valor Justo de Mercado',
    description: 'Get a competitive offer based on current market conditions',
    descriptionEs: 'Obtén una oferta competitiva basada en las condiciones actuales del mercado'
  },
  {
    icon: ClockIcon,
    title: 'Quick Process',
    titleEs: 'Proceso Rápido',
    description: 'Get an offer in minutes, complete the sale same day',
    descriptionEs: 'Obtén una oferta en minutos, completa la venta el mismo día'
  },
  {
    icon: ShieldCheckIcon,
    title: 'No Obligation',
    titleEs: 'Sin Obligación',
    description: 'Free appraisal with no pressure to sell',
    descriptionEs: 'Evaluación gratuita sin presión para vender'
  },
  {
    icon: UserGroupIcon,
    title: 'All Makes & Models',
    titleEs: 'Todas las Marcas y Modelos',
    description: 'We buy any car, truck, or SUV in any condition',
    descriptionEs: 'Compramos cualquier auto, camioneta o SUV en cualquier condición'
  }
]

const process = [
  {
    step: 1,
    title: 'Get Your Offer',
    titleEs: 'Obtén Tu Oferta',
    description: 'Fill out our simple form with your vehicle details',
    descriptionEs: 'Completa nuestro formulario simple con los detalles de tu vehículo'
  },
  {
    step: 2,
    title: 'Schedule Inspection',
    titleEs: 'Programa Inspección',
    description: 'Bring your vehicle for a quick inspection and appraisal',
    descriptionEs: 'Trae tu vehículo para una inspección y evaluación rápida'
  },
  {
    step: 3,
    title: 'Get Paid',
    titleEs: 'Recibe el Pago',
    description: 'Accept our offer and get paid on the spot',
    descriptionEs: 'Acepta nuestra oferta y recibe el pago al instante'
  }
]

export default function SellTradePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
            >
              Sell or Trade Your Car
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Get a fair offer for your vehicle in minutes. We buy any car, 
              regardless of condition or age.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              <span className="block">Obtén una oferta justa por tu vehículo en minutos.</span>
              <span className="block text-accent-blue font-semibold">Compramos cualquier auto, sin importar condición o edad.</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why Sell to FV Auto Sales?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-accent-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10" />
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
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 3-step process to get cash for your car
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-accent-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{step.step}</span>
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

      {/* Valuation Form */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Get Your Instant Offer
              </h2>
              <p className="text-xl text-gray-600">
                Tell us about your vehicle and get a fair market offer
              </p>
            </div>
            <SellTradeForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-blue text-white">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Sell Your Car?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get a fair offer today and turn your car into cash. No obligation, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#valuation-form" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center">
                Get My Offer
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="tel:+17866005536" className="btn-ghost text-lg px-8 py-4 inline-flex items-center justify-center text-white hover:text-blue-200 border border-white border-opacity-30 hover:border-opacity-50">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}