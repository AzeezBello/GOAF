import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'
import { site } from '../lib/siteMetadata'
import { Truck } from 'lucide-react'

export default function Home(){
  return (
    <>
      <Hero />

      <section id="services" className="container py-16">
        <h3 className="text-2xl font-semibold">Our services</h3>
        <p className="text-slate-600 mt-2">Comprehensive logistics and procurement services tailored to your needs.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard title="Freight Forwarding" desc="Air, sea and road freight with customs clearance and documentation support." icon={<Truck />} />
          <ServiceCard title="Project Cargo" desc="Oversized & heavy-lift cargo planning, route surveys and execution." icon={<Truck />} />
          <ServiceCard title="Procurement" desc="End-to-end procurement: sourcing, inspection, and delivery to project sites." icon={<Truck />} />
        </div>
      </section>

      <section id="about" className="container py-16">
        <h3 className="text-2xl font-semibold">About GOAF</h3>
        <p className="text-slate-600 mt-2 max-w-3xl">GOAF is a logistics & procurement company operating across West Africa. We specialize in end-to-end freight, project cargo and procurement solutions for the oil & gas, construction and industrial sectors. Our team blends local know-how with international standards to ensure timely, compliant delivery.</p>
      </section>

      <section id="contact" className="container py-16">
        <h3 className="text-2xl font-semibold">Contact us</h3>
        <p className="text-slate-600 mt-2">Tell us about your project — we’ll get back within one business day.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold">Get a quote</h4>
            <p className="text-sm text-slate-600 mt-2">Email: {site.email} • Phone: {site.phone}</p>
            <div className="mt-6">Office: {site.address}</div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
