import { ProductType } from 'mappers/product/types'
import { productMapper } from '../product'
import { ProductListParamsType, ProductListType } from './types'

export function productListMapper(
  params?: ProductListParamsType,
): ProductListType | null {
  if (!params) {
    return null
  }

  const { products = [], total = 0 } = params

  const mappedProducts = products
    .map(productMapper)
    .filter(object => !!object) as ProductType[]

  return {
    products: mappedProducts,
    total,
  }
}
