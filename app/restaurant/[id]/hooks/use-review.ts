import { GetReviewByRestoId } from '@/services/review-services';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useReview = (id: string) => {
  const parameter = {
    page: 1,
    limit: 6,
  };

  const {
    data: reviewData,

    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['reviews', id],
    queryFn: ({ pageParam = 1 }) =>
      GetReviewByRestoId(id, { ...parameter, page: pageParam }).then(
        (res) => res.data
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.pagination.totalPages === lastPage.pagination.page)
        return undefined;
      return lastPage.pagination.page + 1;
    },
  });

  return { reviewData, isFetchingNextPage, hasNextPage, fetchNextPage };
};
