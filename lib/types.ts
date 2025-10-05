export interface Vehicle {
  vin: string
  stockNumber: string
  year: number
  make: string
  model: string
  trim: string
  price: number
  mileage: number
  body: string
  drivetrain: string
  engine: string
  transmission: string
  exteriorColor: string
  interiorColor: string
  images: string[]
  features: string[]
  carfaxUrl?: string
  location: string
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface FinancingApplication {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  monthlyIncome: string
  employer?: string
  housingType: string
  downPayment: string
  consent: boolean
  createdAt: string
}

export interface AuctionAccessInquiry {
  id: string
  targetCar: string
  budget: string
  timeframe: string
  firstName: string
  lastName: string
  email: string
  phone: string
  consent: boolean
  createdAt: string
}

export interface SellTradeRequest {
  id: string
  vin?: string
  year: number
  make: string
  model: string
  mileage: number
  condition: string
  photos: string[]
  firstName: string
  lastName: string
  email: string
  phone: string
  consent: boolean
  createdAt: string
}

export interface ContactForm {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  consent: boolean
  createdAt: string
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  comment: string
  commentEs?: string
  image?: string
  createdAt: string
}

export interface BusinessHours {
  monday: string
  tuesday: string
  wednesday: string
  thursday: string
  friday: string
  saturday: string
  sunday: string
}

export interface BusinessInfo {
  name: string
  legalName: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  hours: BusinessHours
  social: {
    instagram: string
  }
}