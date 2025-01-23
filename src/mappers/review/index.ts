import {ReviewParamsType, ReviewType} from './types';

export function reviewMapper(params?: ReviewParamsType): ReviewType | null {
  if (!params) {
    return null;
  }

  const {
    rating = 0,
    comment = '',
    date,
    reviewerName = '',
    reviewerEmail = '',
  } = params;

  const mappedDate = date ? new Date(date) : null;

  return {
    rating,
    comment,
    date: mappedDate,
    reviewerName,
    reviewerEmail,
  };
}
