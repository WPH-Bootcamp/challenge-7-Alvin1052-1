import { Devider } from '@/components/ui/devider';
import { Input } from '@/components/ui/input';
import { DistanceFilter, RatingFilter } from '@/constants/filter-items';
import { Star, X } from 'lucide-react';
import { useFilteredItems } from '../hook/useFilter';

const Sidebar = () => {
  const { filter, handleChange, resetFilter } = useFilteredItems();

  return (
    <div className='flex h-fit w-66.5 flex-col items-center gap-6 rounded-xl p-2 py-2 shadow-lg'>
      {/* Filter Distance */}
      <div className='flex w-full flex-col gap-2.5 p-4'>
        <div className='relative'>
          <label className='text-lg font-extrabold'>Filter</label>
          {filter !== null && (
            <div
              className='absolute top-1/2 right-0 -translate-y-1/2'
              onClick={() => resetFilter()}
            >
              <X />
            </div>
          )}
        </div>
        {/* Distance */}
        <div>
          <label className='text-lg font-extrabold'>Distance</label>
          {DistanceFilter.map((item) => (
            <div key={item.value} className='flex items-center gap-2'>
              <input
                type='radio'
                id={item.value}
                value={item.value}
                checked={filter?.range == Number(item.value)}
                name={'range'}
                onChange={(e) => handleChange(e)}
              />
              <label className='text-md font-regular'>{item.label}</label>
            </div>
          ))}
        </div>
      </div>
      <Devider />
      {/* Price */}
      <div className='flex w-full flex-col gap-2.5 px-4'>
        <label className='text-lg font-extrabold'>Price</label>
        <div className='flex items-center gap-2 rounded-lg border border-neutral-300 p-2'>
          <div className='flex-center size-9.5 rounded-sm bg-neutral-100'>
            <p className='text-md font-bold'>Rp</p>
          </div>
          <Input
            className='text-md font-regular border-0 p-0 text-neutral-500'
            type='number'
            name='priceMin'
            value={filter?.priceMin ?? ''}
            onChange={(e) => handleChange(e)}
            placeholder='Minimum Price'
            maxLength={15}
          />
        </div>
        <div className='flex items-center gap-2 rounded-lg border border-neutral-300 p-2'>
          <div className='flex-center size-9.5 rounded-sm bg-neutral-100'>
            <p className='text-md font-bold'>Rp</p>
          </div>
          <Input
            className='text-md font-regular border-0 p-0 text-neutral-500'
            type='number'
            name='priceMax'
            placeholder='Maximum Price'
            value={filter?.priceMax ?? ''}
            onChange={(e) => handleChange(e)}
            maxLength={15}
          />
        </div>
      </div>
      <Devider />

      {/* Rating */}
      <div className='flex w-full flex-col px-4'>
        <label className='text-lg font-extrabold'>Min. Rating</label>
        <div className='radios'>
          {RatingFilter.map((item) => (
            <label key={item.value} className='flex items-center gap-2 p-2'>
              <input
                type='radio'
                name='rating'
                value={item.value}
                checked={filter?.rating == Number(item.value)}
                onChange={(e) => handleChange(e)}
              />{' '}
              <div className='flex items-center gap-0.5'>
                <Star className='fill-amber-500 text-amber-500' size={24} />
                <label className='text-md font-regular'>{item.label}</label>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
