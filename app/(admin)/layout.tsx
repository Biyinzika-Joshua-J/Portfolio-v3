import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin Panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col">
        <nav className='bg-black px-4 py-4 text-white'>Admin</nav>
        <div className='flex-1'>
        {children}
        </div>
    </main>
  )
}
