'use client';

import { RestoCart } from '@/components/resto-cart';
import { Button } from '@/components/ui/button';
import useRecommendResto from './hook/useRecommendResto';
import { LoadingSkeleton } from '@/components/skeleton-ui';

const RecommendResto = () => {
  const { listItem, handleMoreResto, hasNextPage, isFetchingNextPage } =
    useRecommendResto();

  if (listItem?.pages.length === 0) return [];
  console.log('listItem', listItem);
  return (
    <div className='flex flex-col justify-center gap-8'>
      <div className='text-display-md font-extrabold'>Recommended</div>
      <div className='grid w-full grid-cols-2 items-center justify-between gap-5 md:grid-cols-3'>
        {listItem?.pages.map((item) =>
          item.data.restaurants.slice(0, 9).map((item) => (
            <div key={item.id}>
              <RestoCart {...item} />
            </div>
          ))
        )}
      </div>
      <>{isFetchingNextPage && <LoadingSkeleton />}</>
      <>
        {hasNextPage && (
          <Button
            variant={'outline'}
            className='text-md h-12 w-40 rounded-full font-bold'
            onClick={handleMoreResto}
          >
            Show More
          </Button>
        )}
      </>
    </div>
  );
};

export default RecommendResto;
