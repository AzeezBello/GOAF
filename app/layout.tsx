import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { site } from '../lib/siteMetadata'

export const metadata = {
  title: site.title,
  description: site.description
}

export default function RootLayout({ children }:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
