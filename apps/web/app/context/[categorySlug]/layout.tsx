import { Boundary } from 'components/Boundary'
import { use } from 'react'
import { Counter } from '../ClickCounter'
import SubCategoryNav from '../SubCategoryNav'
import { fetchCategoryBySlug } from '@/lib/getCategories'
import type { PageProps } from '@/lib/getCategories'

export default function Layout({
  children, params,
}: PageProps) {
  const category = use(fetchCategoryBySlug(params.categorySlug))
  if (!category)
    return null

  return (
    <Boundary labels={['Layout [Server Component]']} animateRerendering={false}>
      <div className="space-y-9">
        <SubCategoryNav category={category} />
        <Counter />
        <div>{children}</div>
      </div>
    </Boundary>
  )
}
