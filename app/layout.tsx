import './globals.css'
import { Manrope, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '../components/ThemeProvider'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata = {
  title: 'MJ Buy Houses - Premium Home Renovation & Real Estate',
  description: 'Transform old houses into dream homes. Premium renovation and real estate services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider defaultTheme="light" storageKey="renest-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}