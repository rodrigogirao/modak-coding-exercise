import {reviewMapper} from '../review';
import {ProductParamsType, ProductType} from './types';

export function productMapper(params?: ProductParamsType): ProductType | null {
  if (!params) {
    return null;
  }

  const {
    id = 0,
    title = '',
    description = '',
    category = '',
    brand = '',
    stock = 0,
    price = 0,
    discountPercentage = 0,
    rating = 0,
    sku = '',
    reviews = [],
    images = [],
    thumbnail = '',
  } = params;

  const calculatedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2,
  );

  const mappedReviews = reviews.map(reviewMapper).filter(object => !!object);

  return {
    id,
    title,
    description,
    categorySlug: category,
    brand,
    stock,
    originalPrice: price.toFixed(2),
    price: calculatedPrice,
    rating,
    sku,
    reviews: mappedReviews,
    images,
    thumbnail,
  };
}
