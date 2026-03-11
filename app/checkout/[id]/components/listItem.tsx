import { Button } from '@/components/ui/button';
import {
  AddReduceFromCart,
  reCountSummaryCart,
} from '@/features/cart/cart-slice';
import { useAppDispatch } from '@/features/cart/hooks/store-hooks';
import {
  CartItemByRestoObjectType,
  CartItem,
  CartResto,
  InputCartItemType,
} from '@/types/store-type';
import { Minus, Plus } from 'lucide-react';

export const RestoCart: React.FC<CartItemByRestoObjectType> = (
  cartStore: CartItemByRestoObjectType
) => {
  const { restaurant, items } = cartStore;
  return (
    <div className='flex w-full flex-col gap-5 rounded-2xl p-5 shadow-[0px_2px_4px_4px_rgba(0,0,0,0.1)]'>
      {/* Resto Info */}
      <div className='flex items-center gap-2'>
        <img src={`${restaurant.logo}`} alt='logo' width={32} height={32} />
        <div className='text-lg font-bold text-neutral-950'>
          {restaurant.name}
        </div>
      </div>
      {/* Menu */}
      {items.map((item) => (
        <MenuCart key={item.menu.id} Menu={item} resto={restaurant} />
      ))}
    </div>
  );
};

const MenuCart: React.FC<{ Menu: CartItem; resto: CartResto }> = ({
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
