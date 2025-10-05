'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import { ContactForm } from '@/components/forms/contact-form'

const businessHours = [
  { day: 'Monday', hours: '10:00 AM - 6:00 PM', hoursEs: '10:00 AM - 6:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM - 6:00 PM', hoursEs: '10:00 AM - 6:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM - 6:00 PM', hoursEs: '10:00 AM - 6:00 PM' },
  { day: 'Thursday', hours: '10:00 AM - 6:00 PM', hoursEs: '10:00 AM - 6:00 PM' },
  { day: 'Friday', hours: '10:00 AM - 6:00 PM', hoursEs: '10:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 6:00 PM', hoursEs: '10:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: 'By Appointment', hoursEs: 'Con Cita Previa' }
]

const contactMethods = [
  {
    icon: PhoneIcon,
    title: 'Call Us',
    titleEs: 'Llámanos',
    content: '(786) 600-5536',
    href: 'tel:+17866005536',
    description: 'Speak with our team directly',
    descriptionEs: 'Habla directamente con nuestro equipo'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    titleEs: 'Escríbenos',
    content: 'Vfautosalesllc1@gmail.com',
    href: 'mailto:Vfautosalesllc1@gmail.com',
    description: 'Send us a detailed message',
    descriptionEs: 'Envíanos un mensaje detallado'
  },
  {
    icon: ChatBubbleLeftEllipsisIcon,
    title: 'WhatsApp',
    titleEs: 'WhatsApp',
    content: '(786) 600-5536',
    href: 'https://wa.me/17866005536',
    description: 'Chat with us instantly',
    descriptionEs: 'Chatea con nosotros instantáneamente'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-max">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Ready to find your perfect car? Get in touch with our team today. 
              We speak English and Spanish.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              <span className="block">¿Listo para encontrar tu auto perfecto? Ponte en contacto con nuestro equipo hoy.</span>
              <span className="block text-accent-blue font-semibold">Hablamos inglés y español.</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-accent-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {method.title}
                  <span className="block text-sm text-accent-blue mt-1">
                    {method.titleEs}
                  </span>
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                  <span className="block text-gray-500 italic mt-2">
                    {method.descriptionEs}
                  </span>
                </p>
                <a
                  href={method.href}
                  className="text-accent-blue hover:text-accent-hover font-semibold transition-colors"
                >
                  {method.content}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-8">
                Visit Our Dealership
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-accent-blue text-white rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Address</h3>
                    <p className="text-gray-600">
                      6827 Partridge Ln, Suite F<br />
                      Orlando, FL 32807
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-accent-blue text-white rounded-lg flex items-center justify-center">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Business Hours</h3>
                    <div className="space-y-2">
                      {businessHours.map((day, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600">{day.day}:</span>
                          <span className="font-medium text-charcoal">
                            {day.hours}
                            <span className="block text-sm text-accent-blue">
                              {day.hoursEs}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-charcoal mb-2">Directions</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Located in the heart of Orlando, easily accessible from major highways. 
                    Look for our sign on Partridge Lane.
                  </p>
                  <a
                    href="https://maps.google.com/?q=6827+Partridge+Ln+Suite+F+Orlando+FL+32807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-8">
                Send Us a Message
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Find Us on the Map
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in Orlando, serving all of Central Florida
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            {/* Google Maps Embed */}
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.123456789!2d-81.123456789!3d28.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzI0LjQiTiA4McKwMDcnMjQuNSJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FV Auto Sales Location"
              ></iframe>
            </div>
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
              Visit us today or browse our inventory online. Our team is ready to help you 
              find the right vehicle at the right price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inventory" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center">
                Browse Inventory
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/financing" className="btn-ghost text-lg px-8 py-4 inline-flex items-center justify-center text-white hover:text-blue-200 border border-white border-opacity-30 hover:border-opacity-50">
                Apply for Financing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}