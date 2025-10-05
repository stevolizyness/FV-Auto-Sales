import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  UserGroupIcon, 
  TrophyIcon, 
  ShieldCheckIcon, 
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

const milestones = [
  {
    year: '2022',
    title: 'Founded FV Auto Sales',
    titleEs: 'Fundamos FV Auto Sales',
    description: 'Started with a mission to provide quality used cars with honest service',
    descriptionEs: 'Comenzamos con la misión de proporcionar autos usados de calidad con servicio honesto'
  },
  {
    year: '2023',
    title: 'First 100 Cars Sold',
    titleEs: 'Primeros 100 Autos Vendidos',
    description: 'Reached our first major milestone serving the Central Florida community',
    descriptionEs: 'Alcanzamos nuestro primer hito importante sirviendo a la comunidad del Centro de Florida'
  },
  {
    year: '2024',
    title: 'Auction Access Launch',
    titleEs: 'Lanzamiento de Acceso a Subastas',
    description: 'Introduced our revolutionary $300 auction access program',
    descriptionEs: 'Introdujimos nuestro revolucionario programa de acceso a subastas por $300'
  },
  {
    year: '2024',
    title: 'Approaching 200 Sales',
    titleEs: 'Acercándose a 200 Ventas',
    description: 'Nearly 2 years in business, approaching 200 satisfied customers',
    descriptionEs: 'Casi 2 años en el negocio, acercándose a 200 clientes satisfechos'
  }
]

const values = [
  {
    icon: ShieldCheckIcon,
    title: 'Honest & Transparent',
    titleEs: 'Honesto y Transparente',
    description: 'We believe in clear communication and no hidden fees',
    descriptionEs: 'Creemos en la comunicación clara y sin tarifas ocultas'
  },
  {
    icon: UserGroupIcon,
    title: 'Customer First',
    titleEs: 'Cliente Primero',
    description: 'Your satisfaction is our top priority in every transaction',
    descriptionEs: 'Tu satisfacción es nuestra máxima prioridad en cada transacción'
  },
  {
    icon: HeartIcon,
    title: 'Community Focused',
    titleEs: 'Enfocado en la Comunidad',
    description: 'Proudly serving Central Florida with bilingual support',
    descriptionEs: 'Orgullosamente sirviendo al Centro de Florida con soporte bilingüe'
  },
  {
    icon: TrophyIcon,
    title: 'Quality Guaranteed',
    titleEs: 'Calidad Garantizada',
    description: 'Every vehicle is thoroughly inspected and ready for the road',
    descriptionEs: 'Cada vehículo es inspeccionado completamente y listo para la carretera'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
              >
                About FV Auto Sales
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                We're a local Orlando dealership helping drivers find the right car at the right price. 
                In our first two years, we've helped nearly 200 customers get on the road with confidence.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                <span className="block font-semibold text-accent-blue">Somos un concesionario local de Orlando</span>
                <span className="block">que ayuda a los conductores a encontrar el auto adecuado al precio correcto.</span>
                <span className="block">En nuestros primeros dos años, hemos ayudado a casi 200 clientes</span>
                <span className="block">a salir a la carretera con confianza.</span>
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/inventory" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                  Browse Our Inventory
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop"
                alt="FV Auto Sales team"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-accent-blue bg-opacity-10 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on trust, service, and community commitment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-600 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                FV Auto Sales was founded with a simple mission: to make car buying accessible, 
                affordable, and stress-free for everyone in Central Florida. We understand that 
                purchasing a vehicle is a significant investment, and we're here to guide you 
                through every step of the process.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What started as a small dealership has grown into a trusted name in the Orlando 
                community. Our bilingual team serves both English and Spanish-speaking customers, 
                ensuring that language is never a barrier to getting the car you need.
              </p>
              <p className="text-lg leading-relaxed">
                We specialize in quality used vehicles, flexible financing options, and our 
                exclusive Auction Access program that saves customers thousands on their 
                vehicle purchases. Every car we sell comes with our commitment to quality 
                and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent-blue text-white rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{milestone.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                      {milestone.title}
                      <span className="block text-sm text-accent-blue mt-1">
                        {milestone.titleEs}
                      </span>
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                      <span className="block text-gray-500 italic mt-2">
                        {milestone.descriptionEs}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-accent-blue text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {value.title}
                  <span className="block text-sm text-accent-blue mt-1">
                    {value.titleEs}
                  </span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                  <span className="block text-gray-500 italic mt-2">
                    {value.descriptionEs}
                  </span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-accent-blue text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the FV Auto Sales difference for yourself
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-blue-100">
                6827 Partridge Ln, Suite F<br />
                Orlando, FL 32807
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">
                <a href="tel:+17866005536" className="hover:text-white transition-colors">
                  (786) 600-5536
                </a>
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">
                <a href="mailto:Vfautosalesllc1@gmail.com" className="hover:text-white transition-colors">
                  Vfautosalesllc1@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4 inline-flex items-center">
              Get Directions
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