import {ProductParamsType, ProductType} from '../product/types';

export type ProductListParamsType = {
  products?: ProductParamsType[];
  total?: number;
};

export type ProductListType = {
  products: ProductType[];
  total: number;
};
