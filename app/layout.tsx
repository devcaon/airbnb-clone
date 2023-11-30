import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'

export const metadata = {
  title: 'Airbnb-Clone',
  description: 'Airbnb clone app',
}

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Banner />
          <Modal isOpen title='Hello World' />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
