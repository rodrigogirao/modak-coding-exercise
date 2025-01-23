import {useQuery} from '@tanstack/react-query';
import {Api} from '../../api';

export function useProductsList() {
  return useQuery({
    queryKey: ['products-list'],
    queryFn: Api.getProductsList,
  });
}
