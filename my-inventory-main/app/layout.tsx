import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'suryakant_portfolio',
  description: 'Created by suryakant',
  generator: 'suryakant.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
