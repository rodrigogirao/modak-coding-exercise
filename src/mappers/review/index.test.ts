import {faker} from '@faker-js/faker';
import {ReviewParamsType, ReviewType} from './types';
import {reviewMapper} from '.';

function makeReviewParams(): ReviewParamsType {
  return {
    rating: faker.number.int(),
    comment: faker.word.words(),
    date: faker.date.anytime().toISOString(),
    reviewerName: faker.person.fullName(),
    reviewerEmail: faker.internet.email(),
  };
}

describe('reviewMapper', () => {
  it('should return null if no param is provided', () => {
    const result = reviewMapper();

    expect(result).toBeNull();
  });

  it('should return the default values when an empty object is provided', () => {
    const result = reviewMapper({});

    const expectedResult: ReviewType = {
      rating: 0,
      comment: '',
      date: null,
      reviewerName: '',
      reviewerEmail: '',
    };

    expect(result).toEqual(expectedResult);
  });

  it('should return an object with correct values when all params are provided', () => {
    const params = makeReviewParams();

    const result = reviewMapper(params);

    const expectedResult: ReviewType = {
      rating: params.rating!,
      comment: params.comment!,
      date: new Date(params.date!),
      reviewerName: params.reviewerName!,
      reviewerEmail: params.reviewerEmail!,
    };

    expect(result).toEqual(expectedResult);
  });
});
