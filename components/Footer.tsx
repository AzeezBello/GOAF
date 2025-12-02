import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#003734] text-white py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">GOAF</h2>
          <p className="text-slate-200 text-sm">
            Leading provider of used vehicles, fleet supply, and import services across Africa. Trusted, transparent, and reliable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-slate-200 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/inventory" className="hover:text-white">Inventory</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-slate-200 text-sm">
            <li><Link href="/#services" className="hover:text-white">Vehicle Sourcing</Link></li>
            <li><Link href="/#services" className="hover:text-white">Fleet Supply</Link></li>
            <li><Link href="/#services" className="hover:text-white">Importation</Link></li>
            <li><Link href="/#services" className="hover:text-white">Documentation</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center gap-2 text-slate-200 text-sm">
            <MapPin className="w-4 h-4" /> Mahoniestraat 86, 1339EX, Almere Holland
          </p>
          <p className="flex items-center gap-2 text-slate-200 text-sm mt-2">
            <Phone className="w-4 h-4" /> +31 643451612
          </p>
          <p className="flex items-center gap-2 text-slate-200 text-sm mt-2">
            <Mail className="w-4 h-4" /> femijeje01@yahoo.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-500 mt-10 pt-6 text-center text-slate-300 text-sm">
        &copy; {new Date().getFullYear()} Goaf International Company. All rights reserved.
      </div>
    </footer>
  );
}
