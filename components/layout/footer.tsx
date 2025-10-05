import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

const footerLinks = {
  inventory: [
    { name: 'All Vehicles', href: '/inventory' },
    { name: 'SUVs', href: '/inventory?body=SUV' },
    { name: 'Sedans', href: '/inventory?body=Sedan' },
    { name: 'Trucks', href: '/inventory?body=Truck' },
  ],
  services: [
    { name: 'Financing', href: '/financing' },
    { name: 'Auction Access', href: '/auction-access' },
    { name: 'Sell/Trade', href: '/sell-trade' },
    { name: 'Contact', href: '/contact' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Pricing Disclaimer', href: '/legal/pricing-disclaimer' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              FV <span className="text-accent-blue">Auto Sales</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your trusted used car dealership in Central Florida. Buy • Sell • Trade with confidence.
            </p>
            <div className="space-y-3">
              <a href="tel:+17866005536" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <PhoneIcon className="w-5 h-5 mr-3 text-accent-blue" />
                (786) 600-5536
              </a>
              <a href="mailto:Vfautosalesllc1@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <EnvelopeIcon className="w-5 h-5 mr-3 text-accent-blue" />
                Vfautosalesllc1@gmail.com
              </a>
              <div className="flex items-start text-gray-300">
                <MapPinIcon className="w-5 h-5 mr-3 text-accent-blue mt-0.5" />
                <div>
                  <div>6827 Partridge Ln, Suite F</div>
                  <div>Orlando, FL 32807</div>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Inventory</h3>
            <ul className="space-y-2">
              {footerLinks.inventory.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 flex items-center">
                <ClockIcon className="w-4 h-4 mr-2 text-accent-blue" />
                Business Hours
              </h4>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Mon - Sat: 10:00 AM - 6:00 PM</div>
                <div>Sun: By Appointment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© 2024 VF Auto Sales LLC (dba FV Auto Sales). All rights reserved.</p>
              <p className="mt-1">
                Prices do not include tax, tag, title, or doc fee. All financing on approved credit. 
                Vehicle availability and pricing subject to change.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://instagram.com/fvautosales" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.796-1.418-1.947-1.418-3.244s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}