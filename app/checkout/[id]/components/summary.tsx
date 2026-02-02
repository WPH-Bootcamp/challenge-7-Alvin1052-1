'use client';
import { Button } from '@/components/ui/button';
import { useCheckout } from '../hooks/use-checkout';

const Summary = ({ id }: { id: string }) => {
  const { subtotal, DeliveryFee, ServiceFee, TotalPrice } = useCheckout(id);

  return (
    <div className='mx-5 flex flex-col gap-4'>
      <div className='text-lg font-extrabold'>Payment Summary</div>
      <div className='flex items-center justify-between'>
        <div className='text-md font-medium'>Price (item)</div>
        <div className='text-md font-bold'>{subtotal}</div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='text-md font-medium'>Delivery Fee</div>
        <div className='text-md font-bold'>{DeliveryFee}</div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='text-md font-medium'>Service Fee</div>
        <div className='text-md font-bold'>{ServiceFee}</div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='text-md font-medium'>Total</div>
        <div className='text-lg font-extrabold'>{TotalPrice}</div>
      </div>

      <Button
        variant={'default'}
        className='bg-primary-100 text-base-white text-md h-12 w-full rounded-full font-bold'
      >
        Buy
      </Button>
    </div>
  );
};

export default Summary;
