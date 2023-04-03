import ClickCounter from 'components/ClickCounter'

import { use } from 'react'
import SubCategoryNav from './SubCategoryNav'
import {
  type PageProps, fetchCategoryBySlug,
} from '@/lib/getCategories'

export default function Layout({
  children, params,
}: PageProps) {
  const category = use(fetchCategoryBySlug(params.categorySlug))
  if (!category)
    return null
  return (
    <div className="space-y-9">
      <div>
        <div className="flex items-center justify-between">
          <SubCategoryNav category={category} />
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  )
}
