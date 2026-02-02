'use client';
import { Empty } from '@/components/skeleton-ui';
import { useAppSelector } from '@/features/cart/hooks/store-hooks';
import Footer from '@/layout/footer/page';
import Header from '@/layout/header/page';
import { RestoCart } from './components/resto-page-cart';

const CartPage = () => {
  const { cartStore, isloading } = useAppSelector((state) => state.cart);

  const DisplayCart = cartStore.cart;

  return (
    <div>
      <Header className='text-neutral-700' />
      <div className='custom-container flex flex-col gap-5 pt-5 pb-10'>
        <div className='text-display-md font-extrabold text-neutral-950'>
          My Cart
        </div>
        <div className='flex min-h-100 flex-col items-center justify-center gap-5'>
          {isloading ? (
            'Loading......'
          ) : DisplayCart.length <= 0 ? (
            <Empty />
          ) : (
            DisplayCart.map((resto) => (
              <RestoCart key={resto.restaurant.id} {...resto} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
