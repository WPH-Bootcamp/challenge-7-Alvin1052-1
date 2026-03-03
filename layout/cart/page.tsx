import { ShoppingBasketIcon } from 'lucide-react';

const HeaderCart = () => {
  // const { cartStore, isloading } = useAppSelector((state) => state.cart);
  // console.log('cartStoreHeader', cartStore);

  return (
    <>
      {/* {isloading && <div> Loading......</div>} */}
      <ShoppingBasketIcon width={50} height={50} />
    </>
  );
};

export default HeaderCart;
