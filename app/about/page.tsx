// app/about/page.tsx

import Link from "next/link";
import { Truck, Users, Globe, Building2 } from "lucide-react";

export const metadata = {
  title: "About Us - GOAF International Company",
  description:
    "Learn about Goaf International Company, Africa's leading used car and truck import and leasing service provider.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Goaf International Company</h1>
        <p className="text-lg text-slate-700 mb-4">
          Goaf International Company specializes in importing high-quality used cars and trucks from the United States and Europe, trading used clothes from Eastern Europe to Africa, and offering leasing services throughout Africa.
        </p>
        <p className="text-lg text-slate-700 mb-4">
          We are committed to building world-class standards, carefully selecting and training employees, and prioritizing client satisfaction with a sustainable approach to business.
        </p>
        <p className="text-lg text-slate-700 mb-8">
          Our mission is to be the leading provider of used automobile services in Africa, showcasing top car brands at affordable prices while upholding our values and professional ethics.
        </p>
      </section>

      {/* Vision / Mission / Values / Structure */}
      <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-start gap-3">
          <Globe className="text-primary w-8 h-8" />
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p className="text-slate-600">
            To operate a leading used car dealership in Africa, offering high-quality vehicles from the US and Europe.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-start gap-3">
          <Truck className="text-primary w-8 h-8" />
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="text-slate-600">
            To provide affordable, world-class used cars and related services across Africa through a network of dealership garages.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-start gap-3">
          <Users className="text-primary w-8 h-8" />
          <h3 className="text-xl font-semibold">Our Values</h3>
          <p className="text-slate-600">
            Integrity, customer focus, sustainability, accountability, and professionalism guide everything we do.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-start gap-3">
          <Building2 className="text-primary w-8 h-8" />
          <h3 className="text-xl font-semibold">Business Structure</h3>
          <p className="text-slate-600">
            Led by our CEO, our team includes a Garage Manager, HR/Admin Manager, Sales & Marketing, IT, Accountants, and Customer Service Executives, all trained to meet the highest industry standards.
          </p>
        </div>
      </section>

      {/* CTA Buttons */}
      <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
        <Link
          href="/inventory"
          className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:opacity-90 transition"
        >
          View Inventory
        </Link>
        <Link
          href="#contact"
          className="px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-white transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Optional Image/Brand Banner */}
      <div className="mt-20">
        <img
          src="/assets/about-hero.jpg"
          alt="GOAF International"
          className="w-full rounded-xl shadow-lg object-cover h-64 md:h-80"
        />
      </div>
    </main>
  );
}
