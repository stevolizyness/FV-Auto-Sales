import { Vehicle, Testimonial } from './types'

export const mockVehicles: Vehicle[] = [
  {
    vin: '5XYZT3LB8HG123456',
    stockNumber: 'FV001',
    year: 2017,
    make: 'Hyundai',
    model: 'Santa Fe Sport',
    trim: 'Base',
    price: 7500,
    mileage: 102345,
    body: 'SUV',
    drivetrain: 'FWD',
    engine: '2.4L I4',
    transmission: 'Automatic',
    exteriorColor: 'White',
    interiorColor: 'Black',
    images: [
      'https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&h=600&fit=crop'
    ],
    features: ['Backup Camera', 'Bluetooth', 'Alloy Wheels', 'Keyless Entry'],
    carfaxUrl: '#',
    location: 'Orlando, FL',
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    vin: '1G1BE5SM9H7101234',
    stockNumber: 'FV002',
    year: 2017,
    make: 'Chevrolet',
    model: 'Cruze',
    trim: 'LT',
    price: 6800,
    mileage: 89234,
    body: 'Sedan',
    drivetrain: 'FWD',
    engine: '1.4L Turbo I4',
    transmission: 'Automatic',
    exteriorColor: 'Silver',
    interiorColor: 'Black',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop'
    ],
    features: ['Apple CarPlay', 'Android Auto', 'Backup Camera', 'Cruise Control'],
    carfaxUrl: '#',
    location: 'Orlando, FL',
    featured: true,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10'
  },
  {
    vin: '3FA6P0H71HR171234',
    stockNumber: 'FV003',
    year: 2017,
    make: 'Ford',
    model: 'Fusion',
    trim: 'SE',
    price: 7200,
    mileage: 95123,
    body: 'Sedan',
    drivetrain: 'FWD',
    engine: '2.5L I4',
    transmission: 'Automatic',
    exteriorColor: 'Blue',
    interiorColor: 'Gray',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
    ],
    features: ['Backup Camera', 'Bluetooth', 'Power Seats', 'Steering Wheel Controls'],
    carfaxUrl: '#',
    location: 'Orlando, FL',
    featured: true,
    createdAt: '2024-01-08',
    updatedAt: '2024-01-08'
  },
  {
    vin: '1N4AL3AP8HC123456',
    stockNumber: 'FV004',
    year: 2017,
    make: 'Nissan',
    model: 'Altima',
    trim: 'SV',
    price: 6900,
    mileage: 87654,
    body: 'Sedan',
    drivetrain: 'FWD',
    engine: '2.5L I4',
    transmission: 'CVT',
    exteriorColor: 'Gray',
    interiorColor: 'Black',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
    ],
    features: ['Backup Camera', 'Bluetooth', 'Push Button Start', 'Dual Zone Climate'],
    carfaxUrl: '#',
    location: 'Orlando, FL',
    featured: false,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05'
  },
  {
    vin: 'JM1BL1H59A1123456',
    stockNumber: 'FV005',
    year: 2010,
    make: 'Mazda',
    model: 'Mazda3',
    trim: 'i Touring',
    price: 4500,
    mileage: 145678,
    body: 'Sedan',
    drivetrain: 'FWD',
    engine: '2.0L I4',
    transmission: 'Automatic',
    exteriorColor: 'Red',
    interiorColor: 'Black',
    images: [
      'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=600&fit=crop'
    ],
    features: ['Power Windows', 'Cruise Control', 'Keyless Entry', 'AM/FM/CD'],
    carfaxUrl: '#',
    location: 'Orlando, FL',
    featured: false,
    createdAt: '2024-01-03',
    updatedAt: '2024-01-03'
  },
  {
    vin: '1HGCR2F3XHA123456',
    stockNumber: 'FV006',
    year: 2017,
    make: 'Honda',
    model: 'Accord',
    trim: 'LX',
    price: 8500,
    mileage: 78901,
    body: 'Sedan',
    drivetrain: 'FWD',
    engine: '2.4L I4',
    transmission: 'CVT',
    exteriorColor: 'White',
    interiorColor: 'Black',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop'
    ],
    features: ['Backup Camera', 'Bluetooth', 'Dual Zone Climate', 'Lane Watch Camera'],
    carfaxUrl: '#',
    location: 'Orlando, FL',
    featured: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
]

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Rodriguez',
    rating: 5,
    comment: 'Excellent service! They helped me find the perfect car within my budget. The financing process was smooth and they explained everything clearly.',
    commentEs: '¡Servicio excelente! Me ayudaron a encontrar el auto perfecto dentro de mi presupuesto. El proceso de financiamiento fue fluido y explicaron todo claramente.',
    createdAt: '2024-01-20'
  },
  {
    id: '2',
    name: 'John Smith',
    rating: 5,
    comment: 'Great experience buying my first car here. The team was patient and answered all my questions. Highly recommend FV Auto Sales!',
    commentEs: 'Gran experiencia comprando mi primer auto aquí. El equipo fue paciente y respondió todas mis preguntas. ¡Recomiendo FV Auto Sales!',
    createdAt: '2024-01-15'
  },
  {
    id: '3',
    name: 'Carlos Gonzalez',
    rating: 5,
    comment: 'Sold my old car and bought a newer one all in the same day. Fair prices and honest people. Will definitely come back!',
    commentEs: 'Vendí mi auto viejo y compré uno más nuevo el mismo día. Precios justos y gente honesta. ¡Definitivamente volveré!',
    createdAt: '2024-01-10'
  },
  {
    id: '4',
    name: 'Jennifer Davis',
    rating: 5,
    comment: 'The auction access program is amazing! Got a great deal on exactly the car I wanted. The $300 fee was totally worth it.',
    commentEs: '¡El programa de acceso a subastas es increíble! Conseguí una gran oferta en exactamente el auto que quería. La tarifa de $300 valió totalmente la pena.',
    createdAt: '2024-01-05'
  }
]