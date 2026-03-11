'use client';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import ReviewCart from '../components/reviews-cart';
import { useDetails } from '../hooks/use-details-client';
import { useReview } from '../hooks/use-review';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LoadingSkeleton } from '@/components/skeleton-ui';

const Reviews = ({ id }: { id: string }) => {
  const { reviewData, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useReview(id);
  const { RestoData } = useDetails(id);

  if (!reviewData) return <div>not found</div>;

  return (
    <div className='flex flex-col gap-6'>
      {/* Title */}
      <div className='flex flex-col gap-3'>
        <div className='text-display-lg font-extrabold'>Review</div>
        <div className='flex items-center gap-1'>
          <Star className='fill-amber-500 text-amber-500' />
          <p className='text-xl font-extrabold'>{`${RestoData?.averageRating.toFixed(
            1
          )} (${RestoData?.totalReviews} Ulasan)`}</p>
        </div>
      </div>
      {/* Comment */}
      <div className='flex flex-col'>
        <ScrollArea className='h-150'>
          <div className='mb-30 flex flex-wrap justify-center gap-5'>
            {reviewData.pages.map((items) =>
              items.reviews.map((item) => (
                <ReviewCart key={item.id} data={item} />
              ))
            )}
            {isFetchingNextPage && <LoadingSkeleton />}
            {hasNextPage && (
              <div
                className='flex items-center justify-center'
                onClick={() => fetchNextPage()}
              >
                <Button variant={'outline'} size={'buttonmore'}>
                  Show More
                </Button>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Reviews;
