import { TReviewData } from '@/types/review-type';
import dayjs from 'dayjs';
import { Star } from 'lucide-react';

interface ReviewCartProps {
  data: TReviewData;
}

const ReviewCart: React.FC<ReviewCartProps> = ({ data }) => {
  const dateCreatedAt = dayjs(data.createdAt).format('YYYY-MM-DD');

  return (
    <div className='flex w-147.5 flex-col gap-4 rounded-2xl p-4 shadow-lg'>
      {/* Profile */}
      <div className='flex items-center gap-3'>
        <div className='flex-center h-16 w-16 rounded-full bg-neutral-500'>
          {data.id}
        </div>
        <div className='flex flex-col'>
          <div className='text-lg font-extrabold'>{data?.user?.name}</div>
          <div className='text-md font-regular'>{dateCreatedAt}</div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-0.5'>
          {Array(data.star)
            .fill(0)
            .map((_, index) => (
              <Star key={index} className='fill-amber-500 text-amber-500' />
            ))}
        </div>
        <div className='text-md font-regular text-neutral-950'>
          {data.comment}
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
