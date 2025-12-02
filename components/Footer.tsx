import { site } from '../lib/siteMetadata'

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-16">
      <div className="container py-10 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="text-lg font-semibold">{site.title}</h3>
          <p className="text-sm text-slate-600 max-w-sm mt-2">{site.description}</p>
        </div>
        <div className="text-sm text-slate-600">
          <p>{site.company}</p>
          <p>{site.address}</p>
          <p>{site.phone}</p>
          <p>{site.email}</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} {site.company}. All rights reserved.</div>
    </footer>
  )
}
