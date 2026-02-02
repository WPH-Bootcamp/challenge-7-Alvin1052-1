import SocialMedia from '@/components/SocialMedia';
import ContactServices from '@/constants/contact-services';
import { featureItems } from '@/constants/feature-items';

const Footer = () => {
  return (
    <div className='bg-base-black flex w-full justify-between px-30 py-20'>
      {/* left */}
      <div className='flex flex-col gap-10'>
        <div className='flex max-w-95 flex-col gap-5.5'>
          <div className='flex items-center gap-3.75'>
            <img src='/icons/logo.svg' alt='logo' width={42} height={42} />
            <div className='text-display-md text-base-white font-extrabold'>
              Foody
            </div>
          </div>
          <div className='text-md font-regular text-neutral-25'>
            Enjoy homemade flavors & chef’s signature dishes, freshly prepared
            every day. Order online or visit our nearest branch.
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='text-base-white text-sm font-extrabold'>
            Follow on Social Media
          </div>
          <SocialMedia />
        </div>
      </div>
      {/* Middle */}
      <div className='flex w-50 flex-col gap-5'>
        <div className='text-md text-neutral-25 font-extrabold'>Explore</div>

        {featureItems.map((item, index) => (
          <div key={index} className='text-md font-regular text-neutral-25'>
            {item.title}
          </div>
        ))}
      </div>
      {/* right */}
      <div className='flex w-50 flex-col gap-5'>
        <div className='text-md text-neutral-25 font-extrabold'>Help</div>
        {ContactServices.map((item, index) => (
          <div key={index} className='text-md font-regular text-neutral-25'>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
