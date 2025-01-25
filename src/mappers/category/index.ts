import { CategoryParamsType, CategoryType } from './types'

export function categoryMapper(
  params?: CategoryParamsType,
): CategoryType | null {
  if (!params) {
    return null
  }

  const { slug = '', name = '' } = params

  return {
    slug,
    name,
  }
}
