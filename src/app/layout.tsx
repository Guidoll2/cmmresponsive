import './globals.css'
import type { Metadata } from 'next'
import {Lato } from "next/font/google";


const lato = Lato({ subsets: ['latin'],
weight: '400' })

export const metadata: Metadata = {
  title: 'CMM Alarmas',
  description: 'Seguridad electronica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className} >{children}</body>
    </html>
  )
}


