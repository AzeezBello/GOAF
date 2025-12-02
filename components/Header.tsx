import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/goaf-logo.jpg"
            alt="GOAF Logo"
            width={140}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-slate-700 hover:text-[#003734] font-medium transition">Home</Link>
          <Link href="/about" className="text-slate-700 hover:text-[#003734] font-medium transition">About</Link>
          <Link href="/inventory" className="text-slate-700 hover:text-[#003734] font-medium transition">Inventory</Link>
          <Link href="/faq" className="text-slate-700 hover:text-[#003734] font-medium transition">FAQ</Link>
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 bg-[#003734] text-white rounded-md hover:opacity-90 transition"
          >
            Request a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-slate-200">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/" className="text-slate-700 hover:text-[#003734] font-medium transition">Home</Link>
            <Link href="/about" className="text-slate-700 hover:text-[#003734] font-medium transition">About</Link>
            <Link href="/inventory" className="text-slate-700 hover:text-[#003734] font-medium transition">Inventory</Link>
            <Link href="/faq" className="text-slate-700 hover:text-[#003734] font-medium transition">FAQ</Link>
            <Link
              href="/contact"
              className="mt-2 px-4 py-2 bg-[#003734] text-white rounded-md hover:opacity-90 transition text-center"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
