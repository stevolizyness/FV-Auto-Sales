import Link from 'next/link'
import { motion } from 'framer-motion'
import { BanknotesIcon, MagnifyingGlassIcon, TruckIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Tell us your target',
    titleEs: 'Cuéntanos tu objetivo',
    description: 'Share the car you want and your budget',
    descriptionEs: 'Comparte el auto que quieres y tu presupuesto'
  },
  {
    icon: BanknotesIcon,
    title: 'We bid for you',
    titleEs: 'Nosotros ofertamos',
    description: 'Access dealer auctions on your behalf',
    descriptionEs: 'Accedemos a subastas de distribuidores por ti'
  },
  {
    icon: CheckCircleIcon,
    title: 'You save big',
    titleEs: 'Ahorras mucho',
    description: 'Pay just $300 fee plus auction price',
    descriptionEs: 'Paga solo $300 de tarifa más precio de subasta'
  },
  {
    icon: TruckIcon,
    title: 'Pickup or delivery',
    titleEs: 'Recogida o entrega',
    description: 'Arrange convenient vehicle pickup',
    descriptionEs: 'Organiza la recogida conveniente del vehículo'
  }
]

export function AuctionAccessTeaser() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Auction Access Program
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get wholesale pricing on any car through our dealer auction access. 
                Save thousands compared to retail prices.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <span className="block">Obtén precios de mayoreo en cualquier auto a través de nuestro acceso a subastas de distribuidores.</span>
                <span className="block text-accent-blue font-semibold mt-2">¡Ahorra miles comparado con precios de venta al público!</span>
              </p>

              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-blue mb-2">$300</div>
                  <div className="text-gray-600">Per Car Access Fee</div>
                  <div className="text-sm text-gray-500 mt-1">Tarifa de acceso por auto</div>
                </div>
              </div>

              <Link href="/auction-access" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-blue text-white rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      {step.title}
                      <span className="block text-sm text-accent-blue">
                        {step.titleEs}
                      </span>
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                      <span className="block text-gray-500 italic mt-1">
                        {step.descriptionEs}
                      </span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}