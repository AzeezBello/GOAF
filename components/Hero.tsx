import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight">Reliable logistics & procurement — built for Africa</h2>
          <p className="mt-6 text-lg text-slate-600">GOAF delivers end-to-end logistics, freight forwarding, and procurement services for projects large and small. Strategic, compliant, and responsive.</p>

          <div className="mt-8 flex gap-4">
            <Link href="#contact" className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium">Get a quote</Link>
            <Link href="#services" className="inline-block px-6 py-3 rounded-md border">Our services</Link>
          </div>

          <div className="mt-8 text-sm text-slate-500">Trusted by partners across West Africa — project cargo, OOG, and turn-key procurement.</div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/assets/hero-logistics.jpg" alt="Logistics" className="w-full h-80 object-cover"/>
        </div>
      </div>
    </section>
  )
}
