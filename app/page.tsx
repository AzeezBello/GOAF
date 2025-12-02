import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'
import { site } from '../lib/siteMetadata'
import { Truck, FileCheck, Car, PackageSearch, Ship, Boxes } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />

      {/* SERVICES */}
      <section id="services" className="container py-16">
        <h3 className="text-2xl font-semibold">Our Services</h3>
        <p className="text-slate-600 mt-2 max-w-2xl">
          We provide end-to-end automotive sourcing, importation, fleet supply and logistics support for clients across Nigeria and West Africa.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          <ServiceCard
            title="Vehicle Sourcing"
            desc="We source reliable cars, trucks, SUVs and commercial vehicles from trusted partners in Europe, the USA and Asia."
            icon={<Car />}
          />

          <ServiceCard
            title="Fleet Supply"
            desc="Full fleet provisioning for corporate, construction, NGO and government operations — delivered ready for use."
            icon={<Boxes />}
          />

          <ServiceCard
            title="Car Importation"
            desc="Hassle-free importation with transparent processes, shipping arrangements, terminal clearing and doorstep delivery."
            icon={<Ship />}
          />

          <ServiceCard
            title="Heavy-Duty Trucks"
            desc="Supply of DAF, MAN, Scania, Mercedes-Benz Actros and other heavy-duty trucks for haulage and industrial operations."
            icon={<Truck />}
          />

          <ServiceCard
            title="Documentation Handling"
            desc="We manage all import documents, Form M, customs clearance, port handling and compliance paperwork."
            icon={<FileCheck />}
          />

          <ServiceCard
            title="Inspection & Verification"
            desc="Pre-purchase vehicle inspection, VIN checks and quality verification to ensure you receive exactly what you paid for."
            icon={<PackageSearch />}
          />

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="container py-16">
        <h3 className="text-2xl font-semibold">About GOAF</h3>
        <p className="text-slate-600 mt-4 max-w-3xl leading-relaxed">
          GOAF International is a trusted automotive sourcing and logistics company helping individuals, dealers and organizations acquire vehicles from global markets. 
          We specialize in vehicle procurement, importation, documentation handling and fleet supply for corporate and industrial clients. 
          With a strong partner network across Europe and the USA, we ensure every vehicle passes strict inspection and arrives safely, legally and on schedule.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-slate-50 py-16">
        <div className="container">
          <h3 className="text-2xl font-semibold">What Clients Say</h3>
          <p className="text-slate-600 mt-2">Real feedback from our satisfied customers.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-6 rounded-lg bg-white shadow">
              <p className="text-slate-700 italic">
                “GOAF handled my car importation from the U.S. seamlessly. Fast delivery, honest pricing — highly recommended.”
              </p>
              <h4 className="mt-4 font-semibold">— Emmanuel O.</h4>
            </div>

            <div className="p-6 rounded-lg bg-white shadow">
              <p className="text-slate-700 italic">
                “We sourced a full fleet for our construction project. All vehicles arrived in excellent condition and on time.”
              </p>
              <h4 className="mt-4 font-semibold">— Lagos BuildCo</h4>
            </div>

            <div className="p-6 rounded-lg bg-white shadow">
              <p className="text-slate-700 italic">
                “Their documentation and clearing service saved us weeks of stress. Very professional team.”
              </p>
              <h4 className="mt-4 font-semibold">— Aisha Transport Ltd.</h4>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT DETAILS ONLY */}
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


