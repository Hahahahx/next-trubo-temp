import React, { use } from 'react'
import { CounterProvider } from 'app/context/CounterContext'
import { Boundary } from 'components/Boundary'
import CategoryNav from './CategoryNav'
import ClickCounter from './ClickCounter'
import { fetchCategories } from '@/lib/getCategories'

export default function Layout({ children }: { children: React.ReactNode }) {
  const categories = use(fetchCategories())
  return (
    <Boundary
      labels={['Server Component Boundary']}
      size="small"
      animateRerendering={false}
    >
      <Boundary
        labels={['Counter Context Provider [Client Component]']}
        color="blue"
        size="small"
        animateRerendering={false}
      >
        <CounterProvider>
          <Boundary
            labels={['Server Component Boundary']}
            size="small"
            animateRerendering={false}
          >
            <div className="space-y-9">
              <div className="flex items-center justify-between">
                <CategoryNav categories={categories} />
              </div>

              <ClickCounter />
              <div>{children}</div>
            </div>
          </Boundary>
        </CounterProvider>
      </Boundary>
    </Boundary>
  )
}
