import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import Link from 'next/link';

export const LoadingSkeleton = () => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='relative flex h-38 w-92.5 gap-5 p-4'>
        <Skeleton className='relative h-30 w-30 rounded-2xl'>
          <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            Loading...
          </p>
        </Skeleton>
      </div>
    </div>
  );
};

export const Empty = () => {
  return (
    <div className='h-full w-full'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <ShoppingCart size={100} className='m-auto' />
        <div className='text-2xl font-semibold text-neutral-950'>
          Your Cart Is Empty
        </div>
        <Link href='/category'>
          <Button
            variant={'default'}
            className='bg-primary-100 text-display-lg text-base-white h-12 w-60 rounded-full font-bold'
          >
            go to Order
          </Button>
        </Link>
      </div>
    </div>
  );
};
