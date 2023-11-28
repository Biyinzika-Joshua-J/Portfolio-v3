import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//  fortawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

// https://www.figma.com/file/YE2PDrguh5fqbatL7LvpSP/Portfolio-Home-Page-Layout-Inspiration-(Community)?type=design&node-id=9-23&mode=design&t=59SnPN2O4HkRp16H-0