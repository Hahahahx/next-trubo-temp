import '../styles/globals.css'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body className='bg-slate-950'>
        {children}
      </body>
    </html>
  )
}
