export function BilingualBanner() {
  return (
    <section className="bg-accent-blue text-white py-4">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-center">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg">Se habla Español</span>
            <span className="text-blue-200">•</span>
            <span className="text-blue-100">Servicio bilingüe disponible</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg">We speak English</span>
            <span className="text-blue-200">•</span>
            <span className="text-blue-100">Bilingual service available</span>
          </div>
        </div>
      </div>
    </section>
  )
}