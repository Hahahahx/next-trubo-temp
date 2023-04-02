import BuggyButton from 'components/BuggyButton'
import { SkeletonCard } from 'components/SkeletonCard'
import { use } from 'react'
import { fetchSubCategory } from '@/lib/getCategories'
import type { PageProps } from '@/lib/getCategories'

export default function Page({ params }: PageProps) {
  const category = use(
    fetchSubCategory(params.categorySlug, params.subCategorySlug),
  )
  if (!category)
    return null

  return (
    <div className="space-y-4">
      <div className="flex justify-between  space-x-3">
        <div className="text-xl font-medium text-zinc-500">{category.name}</div>

        <BuggyButton />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  )
}
