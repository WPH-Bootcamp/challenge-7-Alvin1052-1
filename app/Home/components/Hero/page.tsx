import RecommendSearch from './components/recommend-search/page';

const Hero = () => {
  return (
    <div className='flex-center relative -mt-20 h-206.75 w-full bg-black'>
      <img
        src={'/image/heroImage.png'}
        alt='heroImage'
        className='absolute z-0 h-full w-full opacity-50'
        style={{
          objectFit: 'cover',
        }}
      />

      <div className='relative z-10 flex flex-col items-center justify-center gap-5'>
        <div className='text-base-white flex flex-col gap-2'>
          <div className='text-display-2xl font-extrabold'>
            Explore Culinary Experiences
          </div>

          <div className='text-display-xs font-bold'>
            Search and refine your choice to discover the perfect restaurant.
          </div>
        </div>

        <RecommendSearch />
      </div>
    </div>
  );
};

export default Hero;
