import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/public/mainStylesheet.css'
import Nav from '@/components/$main/Nav'
import Footer from '@/components/$main/Footer'
import Transition from './Transition'
import ContactForm from '@/components/popups/contactForm/ContactForm'

const SF_Unit_Pro = localFont({src: [
  {
    path: 'fonts/FF Unit Pro light.otf',
    weight: '300'
  },
  {
    path: 'fonts/FF Unit Pro Regular.otf',
    weight: '400'
  },
  {
    path: 'fonts/FF Unit Pro bold.otf',
    weight: '600'
  },
  {
    path: 'fonts/FF Unit Pro black.otf',
    weight: '800'
  }
]})

export const metadata: Metadata = {
  title: 'Jacob Miranda - Software Solutions',
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