import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Trusted Import Experts
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-600 rounded-full">
              Verified Vehicles Only
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Premium Trucks & Cars <br />
            <span className="text-primary">Delivered Ready for Business</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            GOAF supplies high-quality trucks, commercial vehicles, SUVs and 
            premium cars — fully inspected, transparently sourced, and delivered 
            with complete documentation and customs clearance.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="/inventory"
              className="inline-block px-7 py-3 rounded-md bg-primary text-white font-semibold shadow hover:opacity-90 transition"
            >
              View Inventory
            </Link>

            <Link 
              href="#why-us"
              className="inline-block px-7 py-3 rounded-md border border-slate-300 font-medium hover:bg-white/50 transition"
            >
              Why Choose GOAF
            </Link>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Certified global partners
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Documentation handled end-to-end
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Delivery across West Africa
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-xl bg-primary/10 blur-2xl opacity-30 group-hover:opacity-40 transition"></div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="/assets/hero-vehicles.jpg"
              alt="GOAF Vehicle Fleet"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
