import {
  CategoryParamsType,
  ProductListParamsType,
  ProductParamsType,
  categoryMapper,
  productListMapper,
  productMapper,
} from 'mappers'

async function getProductsList(categorySlug: string, sortOption: string) {
  const categoryUrl = categorySlug ? `/category/${categorySlug}` : ''

  const response = await fetch(
    `https://dummyjson.com/products${categoryUrl}?select=title,price,discountPercentage,rating,thumbnail&${sortOption}`,
  )

  const productsListParams: ProductListParamsType = await response.json()

  return productListMapper(productsListParams)
}

async function getProductDetails(id: number) {
  const response = await fetch(`https://dummyjson.com/products/${id}`)

  const productParams: ProductParamsType = await response.json()

  return productMapper(productParams)
}

async function getCategories() {
  const response = await fetch('https://dummyjson.com/products/categories')

  const categoryParams: CategoryParamsType[] = await response.json()

  return categoryParams.map(categoryMapper).filter(category => !!category)
}

export const Api = {
  getProductsList,
  getProductDetails,
  getCategories,
}
