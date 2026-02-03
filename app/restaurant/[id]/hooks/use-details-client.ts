import { getRestoById } from '@/services/resto-services';
import { TRestoGetRestoById } from '@/types/resto-type';
import { useQuery } from '@tanstack/react-query';

export type useDetailsQueryProps = {
  queryKey: string[];
  queryFn: () => Promise<TRestoGetRestoById>;
  initialData?: TRestoGetRestoById;
};

export const useDetails = (id: string) => {
  const {
    data: RestoData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['resto', id],
    queryFn: () => getRestoById({ id }).then((res) => res.data),
  });

  return { RestoData, isLoading, error };
};
