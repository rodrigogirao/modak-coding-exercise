import {useQuery} from '@tanstack/react-query';
import {Api} from '../../api';

export function useFilters() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: Api.getCategories,
  });
}
