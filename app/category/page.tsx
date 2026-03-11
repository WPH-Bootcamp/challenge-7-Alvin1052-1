'use client';
import Footer from '@/layout/footer/page';
import Header from '@/layout/header/page';
import { cn } from '@/lib/utils';
import MainBar from './main/page';
import Sidebar from './sidebar/page';

const Category = () => {
  return (
    <div className='relative w-full'>
      <Header className={'bg-base-white text-neutral-950'} />
      <div className='custom-container relative flex flex-col gap-5'>
        {/* Title */}
        <div className='text-display-md pt-10 font-extrabold'>
          All Restaurant
        </div>
        <div className={cn('flex w-full flex-row gap-10 pb-5', 'h-fit')}>
          {/* Sidebar */}
          <div className='relative w-1/5'>
            {/* <Sidebar filters={filters} onChange={setFilters} /> */}
            <Sidebar />
          </div>
          {/* Main */}
          <div className='max-h-198 w-4/5'>
            <MainBar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
