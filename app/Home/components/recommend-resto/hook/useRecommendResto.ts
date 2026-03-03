'use client';
import { getBestSellerResto } from '@/services/resto-services';
import {
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';

const useBestSellerResto = () => {
  const {
    data: listItem,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['resto', 'recommended'],
    queryFn: () => getBestSellerResto(),
    initialPageParam: 1,

    getNextPageParam: (page) => {
      if (page.data.pagination.totalPages === page.data.pagination.page)
        return null;
    },
  });

  const handleMoreResto = () => {
    fetchNextPage();
  };

  return { listItem, status, handleMoreResto, hasNextPage, isFetchingNextPage };
};

export default useBestSellerResto;
