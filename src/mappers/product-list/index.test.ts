import { faker } from '@faker-js/faker'
import { productListMapper } from '.'
import { ProductListParamsType, ProductListType } from './types'

function makeProductListParams(): ProductListParamsType {
  return {
    products: [],
    total: faker.number.int(),
  }
}

describe('productListMapper', () => {
  it('should return null if no param is provided', () => {
    const result = productListMapper()

    expect(result).toBeNull()
  })

  it('should return the default values when an empty object is provided', () => {
    const result = productListMapper({})

    const expectedResult: ProductListType = {
      products: [],
      total: 0,
    }

    expect(result).toEqual(expectedResult)
  })

  it('should return an object with correct values when all params are provided', () => {
    const params = makeProductListParams()

    const result = productListMapper(params)

    const expectedResult: ProductListType = {
      products: [],
      total: params.total!,
    }

    expect(result).toEqual(expectedResult)
  })
})
