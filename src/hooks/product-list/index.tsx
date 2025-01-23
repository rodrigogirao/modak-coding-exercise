import {useQuery} from '@tanstack/react-query';
import {Api} from '../../api';

export function useProductsList(categorySlug: string) {
  return useQuery({
    queryKey: [`products-list-${categorySlug}`],
    queryFn: () => Api.getProductsList(categorySlug),
  });
}
