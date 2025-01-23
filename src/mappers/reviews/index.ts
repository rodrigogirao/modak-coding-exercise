import {ReviewParamsType, ReviewType} from './types';

export function reviewMapper(params?: ReviewParamsType): ReviewType | null {
  if (!params) {
    return null;
  }

  const {
    rating = 0,
    comment = '',
    date = '',
    reviewerName = '',
    reviewerEmail = '',
  } = params;

  return {
    rating,
    comment,
    date: new Date(date),
    reviewerName,
    reviewerEmail,
  };
}
