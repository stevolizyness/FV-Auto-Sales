'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  CreditCardIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { FinancingForm } from '@/components/forms/financing-form'

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'All Credit Welcome',
    titleEs: 'Todos los Créditos Bienvenidos',
    description: 'Good credit, bad credit, no credit - we work with all situations',
    descriptionEs: 'Buen crédito, mal crédito, sin crédito - trabajamos con todas las situaciones'
  },
  {
    icon: ClockIcon,
    title: 'Quick Approval',
    titleEs: 'Aprobación Rápida',
    description: 'Get approved in minutes, not hours or days',
    descriptionEs: 'Obtén aprobación en minutos, no horas o días'
  },
  {
    icon: CreditCardIcon,
    title: 'Low Down Payments',
    titleEs: 'Pagos Iniciales Bajos',
    description: 'Flexible down payment options to fit your budget',
    descriptionEs: 'Opciones flexibles de pago inicial para adaptarse a tu presupuesto'
  },
  {
    icon: UserGroupIcon,
    title: 'Bilingual Support',
    titleEs: 'Soporte Bilingüe',
    description: 'Spanish-speaking staff to help with your financing needs',
    descriptionEs: 'Personal hispanohablante para ayudar con tus necesidades de financiamiento'
  }
]

const requiredDocuments = [
  {
    title: 'Government-issued ID',
    titleEs: 'Identificación emitida por el gobierno',
    description: 'Driver\'s license, passport, or state ID',
    descriptionEs: 'Licencia de conducir, pasaporte, o identificación estatal'
  },
  {
    title: 'Proof of Income',
    titleEs: 'Comprobante de Ingresos',
    description: 'Recent pay stubs, bank statements, or tax returns',
    descriptionEs: 'Talones de pago recientes, estados de cuenta bancarios, o declaraciones de impuestos'
  },
  {
    title: 'Proof of Residency',
    titleEs: 'Comprobante de Residencia',
    description: 'Utility bill, lease agreement, or bank statement',
    descriptionEs: 'Factura de servicios, contrato de arrendamiento, o estado de cuenta bancario'
  },
  {
    title: 'Insurance Information',
    titleEs: 'Información de Seguro',
    description: 'Current insurance card or policy (if available)',
    descriptionEs: 'Tarjeta de seguro actual o póliza (si está disponible)'
  }
]

const faqs = [
  {
    question: 'What credit score do I need?',
    questionEs: '¿Qué puntaje de crédito necesito?',
    answer: 'We work with all credit situations. While higher credit scores may qualify for better rates, we have financing options for good credit, bad credit, and no credit.',
    answerEs: 'Trabajamos con todas las situaciones de crédito. Mientras que los puntajes de crédito más altos pueden calificar para mejores tasas, tenemos opciones de financiamiento para buen crédito, mal crédito, y sin crédito.'
  },
  {
    question: 'How much down payment do I need?',
    questionEs: '¿Cuánto pago inicial necesito?',
    answer: 'Down payment requirements vary based on your credit situation and the vehicle price. We offer flexible down payment options and can work with various budget levels.',
    answerEs: 'Los requisitos de pago inicial varían según tu situación de crédito y el precio del vehículo. Ofrecemos opciones flexibles de pago inicial y podemos trabajar con varios niveles de presupuesto.'
  },
  {
    question: 'Will applying affect my credit score?',
    questionEs: '¿Solicitar afectará mi puntaje de crédito?',
    answer: 'Our initial pre-approval process uses a soft credit check that does not impact your credit score. A hard credit check is only performed when you decide to proceed with financing.',
    answerEs: 'Nuestro proceso inicial de pre-aprobación utiliza una verificación suave de crédito que no afecta tu puntaje de crédito. Una verificación dura de crédito solo se realiza cuando decides proceder con el financiamiento.'
  },
  {
    question: 'How long does approval take?',
    questionEs: '¿Cuánto tiempo toma la aprobación?',
    answer: 'Most customers receive approval within minutes during business hours. In some cases, it may take up to 24 hours for final approval.',
    answerEs: 'La mayoría de los clientes reciben aprobación dentro de minutos durante horas de trabajo. En algunos casos, puede tomar hasta 24 horas para aprobación final.'
  }
]

export default function FinancingPage() {
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
              Auto Financing Made Simple
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Get pre-approved today with our easy financing process. 
              All credit situations welcome.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="#application-form" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                Apply Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why Choose Our Financing?
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

      {/* Required Documents */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What You'll Need
            </h2>
            <p className="text-xl text-gray-600">
              Have these documents ready for a faster approval process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-accent-blue text-white rounded-lg flex items-center justify-center mb-4">
                  <DocumentTextIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {doc.title}
                  <span className="block text-sm text-accent-blue mt-1">
                    {doc.titleEs}
                  </span>
                </h3>
                <p className="text-gray-600 text-sm">
                  {doc.description}
                  <span className="block text-gray-500 italic mt-2">
                    {doc.descriptionEs}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Get Pre-Approved Today
              </h2>
              <p className="text-xl text-gray-600">
                Complete our secure application and get a decision in minutes
              </p>
            </div>
            <FinancingForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Financing Questions?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => {
                    const element = document.getElementById(`faq-${index}`)
                    if (element) {
                      element.style.display = element.style.display === 'none' ? 'block' : 'none'
                    }
                  }}
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
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div id={`faq-${index}`} className="px-6 pb-4" style={{ display: 'none' }}>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                    <span className="block text-gray-500 italic mt-2">
                      {faq.answerEs}
                    </span>
                  </p>
                </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Apply now and drive away in your new car today
            </p>
            <Link href="#application-form" className="btn-secondary text-lg px-8 py-4 inline-flex items-center">
              Apply for Financing
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}