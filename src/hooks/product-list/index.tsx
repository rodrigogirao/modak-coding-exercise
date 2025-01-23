import {useQuery} from '@tanstack/react-query';
import {Api} from '../../api';

export function useProductsList({
  categorySlug,
  sortOption,
}: {
  categorySlug: string;
  sortOption: string;
}) {
  return useQuery({
    queryKey: [`products-list-${categorySlug}-${sortOption}`],
    queryFn: () => Api.getProductsList(categorySlug, sortOption),
  });
}
