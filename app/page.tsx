import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { site } from '../lib/siteMetadata'
import {
  Truck,
  FileCheck,
  Car,
  PackageSearch,
  Ship,
  Boxes,
  ShieldCheck,
  Clock,
  CheckCircle2
} from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />

      {/* SERVICES */}
      <section id="services" className="container py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold">Our Services</h3>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Complete automotive sourcing, importation and logistics solutions for individuals,
            dealerships and organizations across Nigeria and West Africa.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Vehicle Sourcing"
            desc="Reliable sourcing of cars, pickup trucks, SUVs and commercial vehicles from Europe, USA and Asia."
            icon={<Car className="w-8 h-8 text-primary" />}
          />

          <ServiceCard
            title="Fleet Supply"
            desc="Corporate and industrial fleet provisioning — vehicles delivered ready for field operations."
            icon={<Boxes className="w-8 h-8 text-primary" />}
          />

          <ServiceCard
            title="Car Importation"
            desc="Transparent shipping, clearing and doorstep delivery with real-time updates."
            icon={<Ship className="w-8 h-8 text-primary" />}
          />

          <ServiceCard
            title="Heavy-Duty Trucks"
            desc="Supply of DAF, MAN, Scania, Mercedes-Benz Actros and other industrial trucks."
            icon={<Truck className="w-8 h-8 text-primary" />}
          />

          <ServiceCard
            title="Documentation Handling"
            desc="Form M, customs duties, compliance paperwork, port charges and complete release support."
            icon={<FileCheck className="w-8 h-8 text-primary" />}
          />

          <ServiceCard
            title="Inspection & Verification"
            desc="VIN checks, pre-purchase inspection, condition reports and quality verification."
            icon={<PackageSearch className="w-8 h-8 text-primary" />}
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="container py-20">
        <div className="max-w-3xl">
          <h3 className="text-3xl font-semibold">About GOAF</h3>
          <p className="text-slate-600 mt-4 leading-relaxed">
            GOAF International is a trusted automotive procurement and logistics company helping
            individuals, dealers and organizations acquire vehicles from global markets. We specialize
            in sourcing, importation, documentation and fleet supply with an emphasis on transparency,
            speed and reliability.
          </p>
        </div>

        <a
          href="/inventory"
          className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-md font-medium hover:opacity-90"
        >
          Browse Inventory →
        </a>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-slate-50 py-20">
        <div className="container">
          <h3 className="text-3xl font-semibold">What Clients Say</h3>
          <p className="text-slate-600 mt-2">Trusted by individuals & organizations across Nigeria.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition">
              <p className="text-slate-700 italic leading-relaxed">
                “GOAF handled my car importation from the U.S. seamlessly. Fast delivery, honest pricing — highly recommended.”
              </p>
              <h4 className="mt-4 font-semibold">— Emmanuel O.</h4>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition">
              <p className="text-slate-700 italic leading-relaxed">
                “We sourced a full fleet for our construction project. All vehicles arrived in excellent condition and on time.”
              </p>
              <h4 className="mt-4 font-semibold">— Lagos BuildCo</h4>
            </div>

            <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition">
              <p className="text-slate-700 italic leading-relaxed">
                “Their documentation and clearing service saved us weeks of stress. Very professional team.”
              </p>
              <h4 className="mt-4 font-semibold">— Aisha Transport Ltd.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="container py-20">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-semibold">Why Choose GOAF</h3>
          <p className="text-slate-600 mt-4">
            Trusted, transparent and customer-focused import solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          <div className="p-6 border rounded-xl bg-white hover:shadow-md transition">
            <ShieldCheck className="w-10 h-10 text-primary" />
            <h4 className="text-lg font-semibold mt-4">Verified Global Partners</h4>
            <p className="text-slate-600 mt-2">
              Only trusted suppliers across Europe & USA, ensuring authenticity and quality.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white hover:shadow-md transition">
            <CheckCircle2 className="w-10 h-10 text-primary" />
            <h4 className="text-lg font-semibold mt-4">Transparent Pricing</h4>
            <p className="text-slate-600 mt-2">
              Every cost clearly explained — no hidden charges.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white hover:shadow-md transition">
            <FileCheck className="w-10 h-10 text-primary" />
            <h4 className="text-lg font-semibold mt-4">Professional Documentation</h4>
            <p className="text-slate-600 mt-2">
              Form M, customs clearing & logistics handled by experts.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white hover:shadow-md transition">
            <Clock className="w-10 h-10 text-primary" />
            <h4 className="text-lg font-semibold mt-4">Fast Delivery Timeline</h4>
            <p className="text-slate-600 mt-2">
              Efficient shipping routes ensuring predictable delivery.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white hover:shadow-md transition">
            <PackageSearch className="w-10 h-10 text-primary" />
            <h4 className="text-lg font-semibold mt-4">Quality Inspection</h4>
            <p className="text-slate-600 mt-2">
              VIN checks, inspection reports & condition verification.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white hover:shadow-md transition">
            <Truck className="w-10 h-10 text-primary" />
            <h4 className="text-lg font-semibold mt-4">End-to-End Support</h4>
            <p className="text-slate-600 mt-2">
              From sourcing to doorstep delivery — we manage everything.
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section id="showcase" className="bg-slate-50 py-20">
        <div className="container">
          <h3 className="text-3xl font-semibold">Featured Vehicles</h3>
          <p className="text-slate-600 mt-2">
            A preview of our available cars, pickup trucks and heavy-duty trucks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            <div className="group border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
              <div className="relative">
                <span className="absolute top-4 left-4 bg-primary text-white text-sm px-2 py-1 rounded">
                  Featured
                </span>
                <img
                  src="/assets/inventory/Goaf-Daf-truck.jpg"
                  alt="DAF XF 2015"
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold">DAF XF 2015</h4>
                <p className="text-slate-600 mt-1">$12,500</p>
              </div>
            </div>

            <div className="group border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
              <img
                src="/assets/inventory/Goaf-Daf-truck2.jpeg"
                alt="Ford F-150 2019"
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h4 className="text-lg font-semibold">Ford F-150 2019</h4>
                <p className="text-slate-600 mt-1">$45,000</p>
              </div>
            </div>

            <div className="group border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
              <img
                src="/assets/inventory/Goaf-Daf-truck4.jpeg"
                alt="Scania R-Series 2018"
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h4 className="text-lg font-semibold">Scania R-Series 2018</h4>
                <p className="text-slate-600 mt-1">$15,500</p>
              </div>
            </div>

          </div>

          <div className="mt-12">
            <a
              href="/inventory"
              className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:opacity-90"
            >
              View Full Inventory →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
