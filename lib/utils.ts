export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatMileage(mileage: number): string {
  return new Intl.NumberFormat('en-US').format(mileage) + ' miles'
}

export function generateMonthlyPayment(price: number, rate: number = 0.06, term: number = 60): number {
  const monthlyRate = rate / 12
  const payment = (price * monthlyRate * Math.pow(1 + monthlyRate, term)) / 
                  (Math.pow(1 + monthlyRate, term) - 1)
  return Math.round(payment)
}

export function generateSchemaMarkup(data: any, type: string): string {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  return JSON.stringify({ ...baseSchema, ...data })
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export function validatePhone(phone: string): boolean {
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  return re.test(phone.replace(/\D/g, ''))
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

export function getYearsArray(startYear: number = 2010): number[] {
  const currentYear = new Date().getFullYear()
  const years: number[] = []
  
  for (let year = currentYear; year >= startYear; year--) {
    years.push(year)
  }
  
  return years
}

export function getMakes(): string[] {
  return [
    'Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler',
    'Dodge', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jeep',
    'Kia', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Nissan',
    'Subaru', 'Toyota', 'Volkswagen', 'Volvo'
  ].sort()
}

export function getBodyTypes(): string[] {
  return ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible', 'Wagon', 'Hatchback', 'Van']
}

export function getDrivetrainTypes(): string[] {
  return ['FWD', 'RWD', 'AWD', '4WD']
}

export function getFuelTypes(): string[] {
  return ['Gasoline', 'Diesel', 'Hybrid', 'Electric']
}

export function getTransmissionTypes(): string[] {
  return ['Automatic', 'Manual', 'CVT']
}