import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 py-8 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Goaf International Company. All rights reserved.</p>
        <nav className="space-x-4 mt-4 md:mt-0">
          <Link href="/about" className="text-slate-700 hover:text-primary text-sm">About</Link>
          <Link href="/inventory" className="text-slate-700 hover:text-primary text-sm">Inventory</Link>
          <Link href="/faq" className="text-slate-700 hover:text-primary text-sm">FAQ</Link>
          <Link href="/privacy-policy" className="text-slate-700 hover:text-primary text-sm">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
