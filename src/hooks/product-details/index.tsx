import {useQuery} from '@tanstack/react-query';
import {Api} from '../../api';

export function useProductDetails(id: number) {
  return useQuery({
    queryKey: [`product-detail-${id}`],
    queryFn: () => Api.getProductDetails(id),
  });
}
