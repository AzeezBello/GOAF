import Link from 'next/link'
import { site } from '../lib/siteMetadata'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold">G</div>
          <div>
            <h1 className="text-lg font-semibold">{site.title}</h1>
            <p className="text-xs text-slate-500">{site.company}</p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href="#services" className="hover:text-primary">Services</Link>
          <Link href="#about" className="hover:text-primary">About</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
          <a href={`mailto:${site.email}`} className="px-4 py-2 rounded-md border border-slate-200 hover:bg-slate-50">Get a quote</a>
        </nav>

        <div className="md:hidden">{/* mobile menu placeholder */}
          <button aria-label="open menu" className="px-3 py-2 rounded-md border">Menu</button>
        </div>
      </div>
    </header>
  )
}
