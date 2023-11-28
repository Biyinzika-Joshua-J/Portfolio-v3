import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/root/Navbar/Navbar'
import Footer from '@/components/root/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joshua Biyinzika',
  description: 'Frontend Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col">
        <Navbar/>
        <div className='flex-1 mx-auto lg:w-[85%] w-[90%]'>
        {children}
        </div>
        <Footer/>
    </main>
  )
}
