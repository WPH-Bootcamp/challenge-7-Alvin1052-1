import { BankingProvider } from '@/constants/payment-Provider';
import Footer from '@/layout/footer/page';
import Header from '@/layout/header/page';
import React from 'react';
import Address from './components/address';
import Banking from './components/bank-Provider';
import Decoration from './components/decoration';
import Menu from './components/menu';
import Summary from './components/summary';

type CheckoutProps = { params: Promise<{ id: string }> };
const CheckoutPage: React.FC<CheckoutProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <Header className='text-neutral-800' />
      <div className='custom-container flex flex-col gap-2 py-8'>
        <div className='text-display-md font-extrabold text-neutral-950'>
          Checkout
        </div>
        <div className='flex w-full gap-5'>
          {/* left */}
          <div className='flex w-full max-w-147.5 flex-col gap-5 rounded-2xl'>
            {/* Address */}
            <Address id={id} />
            {/* Menu */}
            <Menu id={id} />
          </div>
          {/* right */}
          <div className='bg-base-white flex w-full max-w-97.5 flex-col gap-5 rounded-2xl border py-5 shadow-lg'>
            {/* Payment Method */}
            <div className='flex flex-col gap-4 px-5'>
              <div className='text-lg font-extrabold'>Payment Method</div>
              <Banking id={id} />
            </div>
            {/* Decoration */}
            <Decoration />
            {/* Summary */}
            <Summary id={id} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
