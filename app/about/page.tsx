// app/about/page.tsx

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us - GOAF International Company",
  description:
    "Learn about Goaf International Company, Africa's leading used car and truck import and leasing service provider.",
};


export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Goaf International Company</h1>
        <p className="text-lg text-slate-700 mb-4">
          Goaf International Company specializes in importing quality used cars and trucks from the United States and Europe, trading used clothes from Eastern Europe to Africa, and providing leasing services throughout Africa.
        </p>
        <p className="text-lg text-slate-700 mb-4">
          We are committed to world-class standards by building a strong capital base, carefully selecting and training employees, and ensuring client satisfaction with a sustainable approach to business.
        </p>
        <p className="text-lg text-slate-700 mb-8">
          Our mission is to be the preeminent provider of used automobile services in Africa, showcasing top car brands at affordable prices while upholding our values and professional ethics.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-slate-600">
              To operate a leading used car dealership in Africa, offering high-quality vehicles from the US and Europe.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-slate-600">
              To provide affordable, world-class used cars and related services across Africa through a network of dealership garages.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
            <p className="text-slate-600">
              Integrity, customer focus, sustainability, accountability, and professionalism guide everything we do.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Business Structure</h3>
            <p className="text-slate-600">
              Led by our CEO, our team includes a Garage Manager, HR/Admin Manager, Sales & Marketing, IT, Accountants, and Customer Service Executives, all trained to meet the highest industry standards.
            </p>
          </div>
        </div>
      </section>
      
      <div className="mt-12 flex justify-center gap-4">
        <Link href="/inventory" className="px-6 py-3 rounded-md bg-primary text-white font-medium">View Inventory</Link>
        <Link href="#contact" className="px-6 py-3 rounded-md border border-primary text-primary font-medium">Contact Us</Link>
      </div>

    </main>
  );
}
