import React from 'react';

const Decoration = () => {
  return (
    <div className='relative flex flex-col'>
      <div className='bg-base-white absolute left-0 z-10 size-5 -translate-1/2 rounded-full' />
      <div className='h-px w-full border-t-2 border-dashed border-neutral-300' />
      <div className='bg-base-white absolute right-0 z-11 size-5 translate-x-1/2 -translate-y-1/2 rounded-full' />
    </div>
  );
};

export default Decoration;
