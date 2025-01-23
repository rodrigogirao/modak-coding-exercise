import {faker} from '@faker-js/faker';
import {ProductParamsType, ProductType} from './types';
import {productMapper} from '.';

function makeProductParams(): ProductParamsType {
  return {
    id: faker.number.int(),
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.productMaterial(),
    brand: faker.commerce.department(),
    stock: faker.number.int(),
    price: 100,
    discountPercentage: 10,
    rating: faker.number.float(),
    sku: faker.commerce.isbn(),
    reviews: [],
    images: [faker.image.url()],
    thumbnail: faker.image.url(),
  };
}

describe('productMapper', () => {
  it('should return null if no param is provided', () => {
    const result = productMapper();

    expect(result).toBeNull();
  });

  it('should return the default values when an empty object is provided', () => {
    const result = productMapper({});

    const expectedResult: ProductType = {
      id: 0,
      title: '',
      description: '',
      categorySlug: '',
      brand: '',
      stock: 0,
      originalPrice: '0.00',
      price: '0.00',
      rating: 0,
      sku: '',
      reviews: [],
      images: [],
      thumbnail: '',
    };

    expect(result).toEqual(expectedResult);
  });

  it('should return an object with correct values when all params are provided', () => {
    const params = makeProductParams();

    const result = productMapper(params);

    const expectedResult: ProductType = {
      id: params.id!,
      title: params.title!,
      description: params.description!,
      categorySlug: params.category!,
      brand: params.brand!,
      stock: params.stock!,
      originalPrice: params.price!.toFixed(2),
      price: (params.price! - params.discountPercentage!).toFixed(2),
      rating: params.rating!,
      sku: params.sku!,
      reviews: [],
      images: params.images!,
      thumbnail: params.thumbnail!,
    };

    expect(result).toEqual(expectedResult);
  });
});
