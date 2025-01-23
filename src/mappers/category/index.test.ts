import {faker} from '@faker-js/faker';
import {CategoryParamsType, CategoryType} from './types';
import {categoryMapper} from '.';

function makeCategoryParams(): CategoryParamsType {
  return {
    slug: faker.word.noun(),
    name: faker.word.noun(),
  };
}

describe('categoryMapper', () => {
  it('should return null if no param is provided', () => {
    const result = categoryMapper();

    expect(result).toBeNull();
  });

  it('should return the default values when an empty object is provided', () => {
    const result = categoryMapper({});

    const expectedResult: CategoryType = {
      slug: '',
      name: '',
    };

    expect(result).toEqual(expectedResult);
  });

  it('should return an object with correct values when all params are provided', () => {
    const params = makeCategoryParams();

    const result = categoryMapper(params);

    const expectedResult: CategoryType = {
      slug: params.slug!,
      name: params.name!,
    };

    expect(result).toEqual(expectedResult);
  });
});
