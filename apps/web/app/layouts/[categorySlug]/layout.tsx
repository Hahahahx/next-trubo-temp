import { use } from 'react'
import ClickCounter from 'components/ClickCounter'
import SubCategoryNav from './SubCategoryNav'
import {
  type PageProps, fetchCategoryBySlug,
} from '@/lib/getCategories'

export default function Layout({
  children,
  // category,
  params,
}: PageProps) {
  const category = use(fetchCategoryBySlug(params.categorySlug))
  if (!category)
    return null
  return (
    <div className="space-y-9">
      <div>
        <div className="flex items-center justify-between">
          <SubCategoryNav category={category} />
          <div>
            <ClickCounter />
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  )
}
