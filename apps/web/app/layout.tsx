import '../styles/uno.css'

import CacheProvider from '@/components/CacheProvider'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body className=' bg-slate-4 '>
        <CacheProvider>
          {children}
        </CacheProvider>
      </body>
    </html>
  )
}
