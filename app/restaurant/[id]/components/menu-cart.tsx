import { LoadingSkeleton } from '@/components/skeleton-ui';
import { Button } from '@/components/ui/button';
import {
  AddReduceFromCart,
  reCountSummaryCart,
} from '@/features/cart/cart-slice';
import {
  useAppDispatch,
  useAppSelector,
} from '@/features/cart/hooks/store-hooks';
import { TMenu, TRestoGetRestoById } from '@/types/resto-type';
import { InputCartItemType } from '@/types/store-type';
import { Minus, Plus } from 'lucide-react';

export const MenuCart = ({
  item,
  resto,
}: {
  item: TMenu;
  resto: TRestoGetRestoById;
}) => {
  const { cartStore, isloading } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const restoExist = cartStore?.cart
    .find((cart) => cart.restaurant.id === resto.id)
    ?.items.find((array) => array.menu.id === item.id);

  const StoreQuantity = restoExist?.quantity || 0;

  const handleAddToCart = () => {
    const payload: InputCartItemType = {
      restaurant: resto,
      menu: {
        id: item.id,
        menu: item,
        quantity: 1,
        total: item.price,
      },
      method: 'add',
    };
    dispatch(AddReduceFromCart(payload));
    dispatch(reCountSummaryCart());
  };

  const handleReduceFromCart = () => {
    const payload: InputCartItemType = {
      restaurant: resto,
      menu: {
        id: item.id,
        menu: item,
        quantity: 1,
        total: item.price,
      },
      method: 'reduce',
    };
    dispatch(AddReduceFromCart(payload));
    dispatch(reCountSummaryCart());
  };

  return isloading ? (
    <LoadingSkeleton />
  ) : (
    <div className='w-full max-w-71.25 cursor-pointer rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105'>
      <img
        src={`${item.image}`}
        alt={item.foodName}
        className='h-71.25 w-full rounded-t-2xl object-cover'
      />
      <div className='flex w-full items-center justify-between gap-3 p-4'>
        <div className='flex flex-col justify-center overflow-hidden'>
          <div className='text-md truncate font-medium'>{item.foodName}</div>
          <div className='text-lg font-extrabold'>{item.price}</div>
        </div>

        {StoreQuantity > 0 ? (
          <div className='flex-center gap-4'>
            <Button
              variant={'outline'}
              size={'icon'}
              className='border border-neutral-300'
              onClick={handleReduceFromCart}
            >
              <Minus />
            </Button>
            <div className='text-lg font-semibold'>{StoreQuantity}</div>
            <Button
              variant={'outline'}
              size={'icon'}
              className='bg-primary-100 text-base-white'
              onClick={handleAddToCart}
            >
              <Plus />
            </Button>
          </div>
        ) : (
          <Button
            className='bg-primary-100 h-10 w-20 rounded-full text-white'
            onClick={handleAddToCart}
          >
            Add
          </Button>
        )}
      </div>
    </div>
  );
};
