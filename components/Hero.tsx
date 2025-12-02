import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Premium Trucks & Cars — Ready for Your Business
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            GOAF supplies high-quality trucks, commercial vehicles, and 
            premium cars sourced from trusted global partners. 
            Reliable, inspected, and delivered with full documentation.
          </p>

          <div className="mt-8 flex gap-4">
            <Link 
              href="#inventory" 
              className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium"
            >
              View Inventory
            </Link>
            <Link 
              href="#contact" 
              className="inline-block px-6 py-3 rounded-md border"
            >
              Request a Quote
            </Link>
          </div>

          <div className="mt-8 text-sm text-slate-500">
            Supplying fleets and individuals across West Africa — trucks, 
            SUVs, sedans, and heavy-duty commercial vehicles.
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/hero-vehicles.jpg"
            alt="Vehicles for sale"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
