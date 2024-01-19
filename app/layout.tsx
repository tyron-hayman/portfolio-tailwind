import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css';
import './css/global.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tyron Hayman - Front-End Developer',
  description: 'A seasoned front-end developer based in the vibrant city of Vancouver, BC, Canada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,1000;1,9..40,400;1,9..40,1000&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
