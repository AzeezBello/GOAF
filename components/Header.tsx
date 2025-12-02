import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          GOAF
        </Link>
        <nav className="space-x-6">
          <Link href="/about" className="text-slate-700 hover:text-primary font-medium">About</Link>
          <Link href="/inventory" className="text-slate-700 hover:text-primary font-medium">Inventory</Link>
          <Link href="/faq" className="text-slate-700 hover:text-primary font-medium">FAQ</Link>
          <Link href="/privacy-policy" className="text-slate-700 hover:text-primary font-medium">Privacy Policy</Link>
        </nav>
      </div>
    </header>
  );
}
