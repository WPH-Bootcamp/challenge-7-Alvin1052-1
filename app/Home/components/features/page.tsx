import { featureItems } from '@/constants/feature-items';
import Link from 'next/link';

const Feature = () => {
  return (
    <div className='grid grid-cols-3 flex-wrap items-center justify-center gap-11.5 md:grid-cols-6'>
      {featureItems.map((item) => (
        <Link
          href={item.link}
          key={item.title}
          className='flex w-40 flex-col items-center justify-center gap-1.5 transition-all duration-300 ease-in-out hover:scale-105'
        >
          <div className='flex h-25 items-center justify-center rounded-2xl shadow-md'>
            <img src={item.src} alt={item.title} className='px-12' />
          </div>
          <p className='text-lg font-bold'>{item.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feature;
