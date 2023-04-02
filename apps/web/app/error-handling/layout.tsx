import React, { use } from 'react'
import ClickCounter from 'components/ClickCounter'
import CategoryNav from './CategoryNav'
import { fetchCategories } from '@/lib/getCategories'

export default function Layout({ children }: { children: React.ReactNode }) {
  const categories = use(fetchCategories())
  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <CategoryNav categories={categories} />
        <ClickCounter />
      </div>

      <div>{children}</div>
    </div>
  )
}
