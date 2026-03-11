'use client';
import { Empty } from '@/components/skeleton-ui';
import { useCheckout } from '../hooks/use-checkout';
import { RestoCart } from './listItem';

const Menu = ({ id }: { id: string }) => {
  const { isloading, DisplayCart } = useCheckout(id);

  return (
    <div className='bg-base-white rounded-2xl p-5'>
      {isloading ? (
        'Loading......'
      ) : !DisplayCart ? (
        <Empty />
      ) : (
        <RestoCart key={DisplayCart.restaurant.id} {...DisplayCart} />
      )}
    </div>
  );
};

export default Menu;
