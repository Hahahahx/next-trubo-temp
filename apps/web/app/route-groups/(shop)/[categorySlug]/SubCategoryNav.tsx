'use client'

import { TabNavItem } from 'components/TabNavItem'
import { useSelectedLayoutSegments } from 'next/navigation'
import { type Category } from '@/lib/getCategories'

function SubCategoryNav({ category }: { category: Category }) {
  const [selectedLayoutSegments] = useSelectedLayoutSegments()

  return (
    <div className="flex items-center space-x-4">
      <TabNavItem
        href={`/route-groups/${category.slug}`}
        isActive={!selectedLayoutSegments}
      >
        All
      </TabNavItem>

      {category.items.map((item) => (
        <TabNavItem
          key={item.slug}
          href={`/route-groups/${category.slug}/${item.slug}`}
          isActive={item.slug === selectedLayoutSegments}
        >
          {item.name}
        </TabNavItem>
      ))}
    </div>
  )
}

export default SubCategoryNav
