import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/public/mainStylesheet.css'
import Nav from '@/components/$main/Nav'
import Footer from '@/components/$main/Footer'
import Transition from './Transition'
import ContactForm from '@/components/popups/contactForm/ContactForm'

const SF_Unit_Pro = localFont({src: [
  {
    path: '../public/fonts/FF Unit Pro Light.otf',
    weight: '300'
  },
  {
    path: '../public/fonts/FF Unit Pro Regular.otf',
    weight: '400'
  },
  {
    path: '../public/fonts/FF Unit Pro Bold.otf',
    weight: '600'
  },
  {
    path: '../public/fonts/FF Unit Pro Black.otf',
    weight: '800'
  }
]})

export const metadata: Metadata = {
  title: {
    default: 'Jacob Miranda - Software Solutions',
    template: '%s - Jacob Miranda'
  },
  description: 'I offer complete software solutions for enahancing your brand and increasing conversions. SEO, websites, mobile apps, databases, and more!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={SF_Unit_Pro.style}>
        <main>
          <Nav />
          <Transition>{children}</Transition>
          <Footer />
          <ContactForm />
        </main>
      </body>
    </html>
  )
}