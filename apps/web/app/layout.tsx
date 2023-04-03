'use client'

import CacheProvider from '@/components/CacheProvider'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <CacheProvider>
          {children}
        </CacheProvider>
      </body>
    </html>
  )
}
