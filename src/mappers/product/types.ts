import {ReviewParamsType, ReviewType} from '../reviews/types';

export type ProductParamsType = {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  brand?: string;
  stock?: number;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  sku?: string;
  reviews?: ReviewParamsType[];
  images?: string[];
  thumbnail?: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  categorySlug: string;
  brand: string;
  stock: number;
  originalPrice: string;
  price: string;
  rating: number;
  sku: string;
  reviews: ReviewType[];
  images: string[];
  thumbnail: string;
};
