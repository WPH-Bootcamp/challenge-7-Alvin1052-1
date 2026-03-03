'use client';
import { Button } from '@/components/ui/button';
import { Dot, Share2, Star } from 'lucide-react';
import { useDetails } from '../hooks/use-details-client';
import { cn } from '@/lib/utils';

// type HeroProps = {
//   initialData: TRestoGetRestoById;
//   id: string;
// };

const Hero = ({ id, className }: { id: string; className?: string }) => {
  // const query: useDetailsQueryProps = {
  //   queryKey: ['resto', id],
  //   queryFn: () => getRestoById({ id }).then((res) => res.data),
  // };

  const { RestoData, error, isLoading } = useDetails(id);

  return (
    <div className={cn('flex w-full flex-col gap-8', className)}>
      {/* Image */}
      <div className='flex w-full gap-5'>
        <img
          src={`${RestoData?.images[0]}`}
          alt='image-0'
          className='h-117.5 w-162.75 rounded-2xl object-cover shadow-xl'
        />

        <div className='flex w-full flex-col gap-5'>
          <img
            src={`${RestoData?.images[1]}`}
            alt='image-0'
            className='h-75.5 w-full rounded-2xl object-cover shadow-xl'
          />

          <div className='flex w-full justify-between gap-5'>
            <img
              src={`${RestoData?.images[2]}`}
              alt='image-0'
              className='h-37 w-full max-w-63.5 rounded-2xl object-cover shadow-xl'
            />
            <img
              src={`${RestoData?.images[2]}`}
              alt='image-0'
              className='h-37 w-full max-w-63.5 rounded-2xl object-cover shadow-xl'
            />
          </div>
        </div>
      </div>
      {/* Data */}
      <div className='flex items-center justify-between gap-4'>
        <img
          src={`${RestoData?.logo}`}
          alt='image-0'
          className='h-30 w-30 rounded-full object-cover shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'
        />

        <div className='flex w-full flex-col gap-0.5'>
          <div className='text-lg font-extrabold'>{RestoData?.name}</div>
          <div className='flex items-center gap-2'>
            <Star
              className='fill-amber-500 text-amber-500'
              width={24}
              height={24}
            />
            <p>{RestoData?.star.toFixed(1)}</p>
          </div>
          <div className='text-md font-regular flex items-center'>
            <div>{RestoData?.place}</div>
            <Dot />
            <div>{`10km`}</div>
          </div>
        </div>
        <Button
          variant={'ghost'}
          className='w-11xl flex h-11 items-center justify-center gap-2 rounded-full border border-neutral-300'
        >
          <Share2 className='text-neutral-950' width={24} height={24} />
          <p className='text-md font-bold'>Share</p>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
