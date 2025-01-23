import {productMapper} from '../mappers/product';
import {productListMapper} from '../mappers/product-list';
import {ProductListParamsType} from '../mappers/product-list/types';
import {ProductParamsType} from '../mappers/product/types';

async function getProductsList() {
  const response = await fetch(
    'https://dummyjson.com/products?select=title,price,discountPercentage,rating,thumbnail',
  );

  const productsListParams: ProductListParamsType = await response.json();

  return productListMapper(productsListParams);
}

async function getProductDetails(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  const productParams: ProductParamsType = await response.json();
  console.warn(productParams);
  return productMapper(productParams);
}

export const Api = {
  getProductsList,
  getProductDetails,
};
