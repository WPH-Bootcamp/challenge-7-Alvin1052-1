import { Button } from '@/components/ui/button';
import {
  AddReduceFromCart,
  reCountSummaryCart,
} from '@/features/cart/cart-slice';
import { useAppDispatch } from '@/features/cart/hooks/store-hooks';
import { CartItem, CartResto, InputCartItemType } from '@/types/store-type';
import { Minus, Plus } from 'lucide-react';

export const MenuCart: React.FC<{ Menu: CartItem; resto: CartResto }> = ({
  Menu,
  resto,
}) => {
  const { menu, quantity } = Menu;

  const dispatch = useAppDispatch();
  const StoreQuantity = quantity;

  const handleAddToCart = () => {
    const payload: InputCartItemType = {
      restaurant: resto,
      menu: {
        id: menu.id,
        menu: menu,
        quantity: 1,
        total: menu.price,
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
        id: menu.id,
        menu: menu,
        quantity: 1,
        total: menu.price,
      },
      method: 'reduce',
    };
    dispatch(AddReduceFromCart(payload));
    dispatch(reCountSummaryCart());
  };

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-[17px]'>
        <img
          src={`${menu.image}`}
          alt='logo'
          width={80}
          height={80}
          className='rounded-[12px]'
        />
        <div className='flex flex-col text-neutral-950'>
          <div className='text-md font-medium'>{menu.foodName}</div>
          <div className='text-lg font-extrabold'>
            Rp.<label>{menu.price}</label>
          </div>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
};
