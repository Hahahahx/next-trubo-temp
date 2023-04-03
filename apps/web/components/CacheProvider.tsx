'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider as ChakraProviderDefault } from '@chakra-ui/react'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
        <CacheProvider>
          <ChakraProviderDefault>{children}</ChakraProviderDefault>
        </CacheProvider>
  )
}
