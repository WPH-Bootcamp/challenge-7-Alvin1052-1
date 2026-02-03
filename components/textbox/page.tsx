import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { InputHTMLAttributes } from 'react';
import useTextbox from './hooks';
import { id } from 'zod/locales';

type TextboxProps = InputHTMLAttributes<HTMLInputElement>;

const Textbox: React.FC<TextboxProps> = ({ type, className, ...props }) => {
  const { show, handleShow } = useTextbox();

  return (
    <div className='flex h-14 justify-between rounded-xl border border-neutral-300 p-3 px-3 py-3.25'>
      <input
        {...props}
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        className={cn('text-md-regular w-full focus:outline-none', className)}
      />
      {type === 'password' && (
        <button onClick={handleShow} type='button'>
          {show ? <EyeOff /> : <Eye />}
        </button>
      )}
    </div>
  );
};

export default Textbox;
