'use client';
import { RestoCart } from '@/components/resto-cart';
import { useFilteredItems } from '../hook/useFilter';
import { LoadingSkeleton } from '@/components/skeleton-ui';

const MainBar = () => {
  const { RestoToDisplay, isPending } = useFilteredItems();

  if (isPending) return <LoadingSkeleton />;
  console.log('RestoToDisplay main bar', RestoToDisplay);
  return (
    <div className='relative h-full overflow-y-scroll'>
      <div className='relative h-full px-5'>
        <div className='grid grid-cols-2 gap-5 pb-2'>
          {RestoToDisplay.length > 0 &&
            !isPending &&
            RestoToDisplay.map((item) => <RestoCart key={item.id} {...item} />)}
        </div>
      </div>
      {/* <div className='sticky -bottom-2 right-0 w-full h-5 z-10 bg-gradient-to-t from-25% to-100% from-white/80 to-transparent' /> */}
    </div>
  );
};

export default MainBar;
