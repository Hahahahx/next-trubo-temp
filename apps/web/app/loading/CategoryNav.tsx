'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { TabNavItem } from 'components/TabNavItem'
import { type Category } from '@/lib/getCategories'

function CategoryNav({ categories }: { categories: Category[] }) {
  const [selectedLayoutSegments] = useSelectedLayoutSegments()

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/loading" isActive={!selectedLayoutSegments}>
        Home
      </TabNavItem>

      {categories.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/loading/${item.slug}`}
          isActive={item.slug === selectedLayoutSegments}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  )
}

export default CategoryNav
