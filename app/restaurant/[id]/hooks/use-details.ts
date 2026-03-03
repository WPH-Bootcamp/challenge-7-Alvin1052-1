'use client';
import { TRestoGetRestoById } from '@/types/resto-type';
import { useQuery } from '@tanstack/react-query';

export type useDetailsQueryProps = {
  queryKey: string[];
  queryFn: () => Promise<TRestoGetRestoById>;
  initialData?: TRestoGetRestoById;
};

export const useDetails = (Query: useDetailsQueryProps) => {
  const { data: RestoData, isLoading, error } = useQuery(Query);

  return { RestoData, isLoading, error };
};
