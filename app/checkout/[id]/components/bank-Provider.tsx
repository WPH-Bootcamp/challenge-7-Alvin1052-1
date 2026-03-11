'use client';
import { BankingProvider } from '@/constants/payment-Provider';
import { cn } from '@/lib/utils';
import { useCheckout } from '../hooks/use-checkout';

const Banking = ({ id }: { id: string }) => {
  const { handleSelectBank } = useCheckout(id);

  return (
    <>
      {BankingProvider.map((bank) => (
        <div key={bank.name} className={cn('flex w-full items-center gap-2')}>
          <img src={bank.icon} alt='banking' className='flex-none' />
          <div className='flex-1'>{bank.name}</div>
          <input
            type='radio'
            name='bank'
            value={bank.name}
            id={bank.name}
            onSelect={() => handleSelectBank(bank.name)}
          />
        </div>
      ))}
    </>
  );
};

export default Banking;

// interface BankingProps {
//   bank: BankType;
//   checked?: boolean;
//   setOnChange: () => void;
// }

// const BankCart: React.FC<BankingProps> = () => {
//   return (
//     <div className={cn('flex w-full items-center gap-2')}>
//       <img src={bank.icon} alt='banking' className='flex-none' />
//       <div className='flex-1'>{bank.name}</div>
//       <input
//         type='radio'
//         name='bank'
//         value={bank.name}
//         id={bank.name}
//         onSelect={setOnchange}
//       />
//       {/* <div
//         className={cn(
//           'flex-none  w-6 h-6 rounded-full flex-center',
//           checked ? 'bg-primary-100' : 'border-[1.6px] border-neutral-400'
//         )}
//       >
//         <div className='w-[9.6px] h-[9.6px] rounded-full bg-base-white' />
//       </div> */}
//     </div>
//   );
// };
