import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/goaf-logo.jpg"
            alt="GOAF Logo"
            width={120}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link href="/" className="text-slate-700 hover:text-primary font-medium">Home</Link>
          <Link href="/about" className="text-slate-700 hover:text-primary font-medium">About</Link>
          <Link href="/inventory" className="text-slate-700 hover:text-primary font-medium">Inventory</Link>
          <Link href="/faq" className="text-slate-700 hover:text-primary font-medium">FAQ</Link>
        </nav>
      </div>
    </header>
  );
}
