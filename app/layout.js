import './globals.css'
import { Navbar } from '@/components'

export const metadata = {
  title: 'Eko',
  description: 'Discover the environmental problems',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" relative">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
