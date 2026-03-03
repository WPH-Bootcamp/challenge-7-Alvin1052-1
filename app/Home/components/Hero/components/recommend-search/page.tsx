'use client';
import { Search } from 'lucide-react';
import useSearch from './hook/useSearch';

const RecommendSearch = async () => {
  const { SearchData, isLoading, setKeyword, keyword, isFocus, setIsFocus } =
    useSearch();

  if (isLoading) return <div>Loading</div>;

  console.log('SearchData', SearchData);
  return (
    <div>
      <div className='bg-base-white min-h-14 w-152 rounded-full text-neutral-600 focus-within:rounded-xl'>
        <div className='flex items-center gap-1.25 px-6 py-3.25'>
          <div>
            <Search width={20} height={20} />
          </div>
          <input
            id='search'
            name='keyword'
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            type='text'
            className='text-md font-regular w-full focus:outline-none'
            placeholder='Search restaurants, food and drink'
          />
        </div>
      </div>
      <div className='flex w-full flex-col py-1 text-neutral-600'>
        {isFocus &&
          SearchData &&
          SearchData?.restaurants?.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className='bg-neutral-100 px-4 py-2 first:rounded-t-xl last:rounded-b-xl hover:bg-neutral-200'
              onClick={() => setKeyword(item.name)}
            >
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecommendSearch;
