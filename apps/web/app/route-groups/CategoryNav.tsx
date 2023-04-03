'use client'

import { TabNavItem } from 'components/TabNavItem'
import { useSelectedLayoutSegments } from 'next/navigation'
import { type Category } from '@/lib/getCategories'

function CategoryNav({ categories }: { categories: Category[] }) {
  const [selectedLayoutSegments] = useSelectedLayoutSegments()

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem href="/route-groups" isActive={!selectedLayoutSegments}>
        Home
      </TabNavItem>

      {categories.map(item => (
        <TabNavItem
          key={item.slug}
          href={`/route-groups/${item.slug}`}
          isActive={item.slug === selectedLayoutSegments}
        >
          {item.name}
        </TabNavItem>
      ))}

      <TabNavItem href="/route-groups/checkout">Checkout</TabNavItem>

      <TabNavItem
        href="/route-groups/blog"
        isActive={selectedLayoutSegments === 'blog'}
      >
        Blog
      </TabNavItem>
    </div>
  )
}

export default CategoryNav
