import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PON Sovereign Agent — $PSA',
  description: 'PON Sovereign Agent is an autonomous AI treasury that continuously evolves its intelligence and allocates protocol-generated revenue across crypto and tokenized real-world assets.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mono antialiased">
        {children}
      </body>
    </html>
  )
}
