import ChakraProvider from 'ui/ChakraProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body>
          <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
