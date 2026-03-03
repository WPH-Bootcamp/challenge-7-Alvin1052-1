import { Button } from '@/components/ui/button';
import { CartItemByRestoObjectType } from '@/types/store-type';
import { ChevronDown } from 'lucide-react';
import { MenuCart } from './menu-page-cart';
import Link from 'next/link';

export const RestoCart: React.FC<CartItemByRestoObjectType> = (
  cartStore: CartItemByRestoObjectType
) => {
  const { restaurant, items, subtotal } = cartStore;
  return (
    <div className='flex w-full flex-col gap-5 rounded-2xl p-5 shadow-[0px_2px_4px_4px_rgba(0,0,0,0.1)]'>
      {/* Resto Info */}
      <div className='flex items-center gap-2'>
        <img src={`${restaurant.logo}`} alt='logo' width={32} height={32} />
        <div className='text-lg font-bold text-neutral-950'>
          {restaurant.name}
        </div>
        <ChevronDown className='-rotate-90' />
      </div>
      {/* Menu */}
      {items.map((item) => (
        <MenuCart key={item.menu.id} Menu={item} resto={restaurant} />
      ))}

      <div>
        <div className='h-px w-full border border-dashed border-neutral-300' />
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <div className='text-md font-medium'>Total</div>
          <div className='text-lg font-extrabold'>
            Rp.<label>{subtotal}</label>
          </div>
        </div>
        <Link href={`/checkout/${restaurant.id}`}>
          <Button className='bg-primary-100 text-base-white text-md h-12 w-60 rounded-full font-bold'>
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};
