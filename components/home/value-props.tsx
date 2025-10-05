import { ShieldCheckIcon, CurrencyDollarIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const valueProps = [
  {
    icon: CurrencyDollarIcon,
    title: 'Buy • Sell • Trade',
    titleEs: 'Compra • Venta • Intercambio',
    description: 'Flexible options for every customer. Get the best value for your vehicle.',
    descriptionEs: 'Opciones flexibles para cada cliente. Obtén el mejor valor por tu vehículo.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Financing Available',
    titleEs: 'Financiamiento Disponible',
    description: 'Multiple financing options for all credit situations. Get approved today.',
    descriptionEs: 'Múltiples opciones de financiamiento para todas las situaciones de crédito.',
  },
  {
    icon: TruckIcon,
    title: 'We Buy Any Car',
    titleEs: 'Compramos Tu Auto',
    description: 'Get a fair offer for your vehicle, regardless of condition or age.',
    descriptionEs: 'Obten una oferta justa por tu vehículo, sin importar condición o edad.',
  },
  {
    icon: UserGroupIcon,
    title: 'Auction Access',
    titleEs: 'Acceso a Subastas',
    description: 'Access dealer auctions for just $300 per car. Get wholesale pricing.',
    descriptionEs: 'Accede a subastas de distribuidores por solo $300 por auto.',
  },
]

export function ValueProps() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Why Choose FV Auto Sales?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for quality used cars in Central Florida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue text-white rounded-full mb-6 group-hover:bg-accent-hover transition-colors duration-200">
                <prop.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {prop.title}
                <span className="block text-sm text-accent-blue mt-1">
                  {prop.titleEs}
                </span>
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="block">{prop.description}</span>
                <span className="block text-gray-500 mt-2 italic">
                  {prop.descriptionEs}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}