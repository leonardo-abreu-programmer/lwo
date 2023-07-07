import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className="bg-theme text-white relative w-full h-full">
        <Navbar/>
        <main className="pt-16 xl:px-72">
          {children}
        </main>
        <Footer/>   
      </body>
    </html>
  )
}
