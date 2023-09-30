import './globals.css'
import { Figtree } from 'next/font/google'

const inter = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: 'Vedant Kale',
  description: 'Passionate Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
