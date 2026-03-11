'use client';
import { Button } from '@/components/ui/button';
import { useCheckout } from '../hooks/use-checkout';

const Address = ({ id }: { id: string }) => {
  const { DeliveryAddress, CustomerPhone } = useCheckout(id);
  return (
    <div className='bg-base-white flex w-full flex-col gap-5.25 rounded-2xl p-5'>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-2'>
          <img src='/icons/nearby.svg' alt='Address' className='h-8 w-8' />
          <div className='text-lg font-extrabold text-neutral-950'>
            Delivery Address
          </div>
        </div>
        <div className='text-md font-medium'>{DeliveryAddress}</div>
        <div className='text-md font-medium'>{CustomerPhone}</div>
      </div>
      <Button variant={'outline'} className='h-10 w-30'>
        Change
      </Button>
    </div>
  );
};

export default Address;
