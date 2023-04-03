'use client'

import { TabNavItem } from 'components/TabNavItem'
import { useSelectedLayoutSegments } from 'next/navigation'
import { type Category } from '@/lib/getCategories'

function CategoryNav({ categories }: { categories: Category[] }) {
  const [selectedLayoutSegments] = useSelectedLayoutSegments()

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/error-handling" isActive={!selectedLayoutSegments}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/error-handling/${item.slug}`}
          isActive={item.slug === selectedLayoutSegments}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  )
}

export default CategoryNav
