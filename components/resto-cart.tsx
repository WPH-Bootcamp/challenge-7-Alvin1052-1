import {
  TRestoBestSellerResto,
  TRestoGetRestaurant,
  TRestoRecommendResto,
} from '@/types/resto-type';
import { Dot, Star } from 'lucide-react';
import Link from 'next/link';

export const RestoCart = (
  item: TRestoBestSellerResto | TRestoRecommendResto | TRestoGetRestaurant
) => {
  return (
    <Link
      href={`/restaurant/${item.id}`}
      className='flex w-full gap-3 rounded-2xl bg-white p-4 drop-shadow-lg transition-all duration-300 ease-in-out hover:scale-105'
    >
      <img
        src={item.images[1] || '/image/logorestaurant.svg'}
        alt={item.name}
        className='h-30 w-30 rounded-2xl object-cover'
      />
      <div className='flex flex-col gap-0.5'>
        <div className='text-lg font-extrabold'>{item.name}</div>
        <div className='flex items-center gap-2'>
          <Star
            className='fill-amber-500 text-amber-500'
            width={24}
            height={24}
          />
          <p>{item.star.toFixed(1)}</p>
        </div>
        <div className='text-md font-regular flex items-center'>
          <div>{item.place}</div>
          <Dot />
          <div>{`10km`}</div>
        </div>
      </div>
    </Link>
  );
};
