import {
  Car,
  Truck,
  FileCheck2,
  Boxes,
  Ship,
  Settings,
  BadgeCheck,
} from "lucide-react";

import ServiceCard from "@/components/ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      title: "Vehicle Sourcing & Procurement",
      desc: "End-to-end sourcing of brand-new and certified used vehicles globally. We negotiate pricing, verify condition, and ensure full compliance before purchase.",
      icon: <Car/>,
    },
    {
      title: "Corporate Fleet Supply",
      desc: "Scalable fleet provisioning for enterprises—saloon cars, SUVs, buses, pickups, and utility vehicles. Long-term, short-term, or flexible leasing plans available.",
      icon: <Truck />,
    },
    {
      title: "Car Import & Clearing",
      desc: "We handle shipping, customs documentation, duty payment, port clearance, and final delivery to your location—fast, transparent, and compliant.",
      icon: <Ship />,
    },
    {
      title: "Heavy-Duty Trucks & Equipment",
      desc: "Supply of new and foreign-used trucks: tippers, trailers, tankers, low-beds, excavators, and forklifts. Ideal for construction, logistics, and industrial operations.",
      icon: <Truck />,
    },
    {
      title: "Spare Parts Procurement",
      desc: "OEM-grade spare parts, engines, and components sourced directly from verified manufacturers. We ensure authenticity, quality, and timely delivery.",
      icon: <Settings />,
    },
    {
      title: "Documentation & Compliance Handling",
      desc: "Comprehensive paperwork solutions: Form M, PAAR, SONCAP, insurance, import permits, registration, and corporate compliance filings.",
      icon: <FileCheck2 />,
    },
    {
      title: "Warehousing & Last-Mile Delivery",
      desc: "Secure storage, inventory tracking, and nationwide last-mile distribution for vehicles, parts, and industrial equipment.",
      icon: <Boxes />,
    },
    {
      title: "OEM & Dealer Partnerships",
      desc: "Certified procurement channels with international manufacturers, ensuring bulk supply, warranty support, and priority order processing.",
      icon: <BadgeCheck />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Logistics & Procurement Services
          </h2>
          <p className="text-slate-600 mt-3">
            Streamlined automotive logistics, global procurement, and corporate fleet solutions—powered by reliable processes, transparent sourcing, and industry expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              title={s.title}
              desc={s.desc}
              icon={s.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
