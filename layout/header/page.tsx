'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ShoppingBasketIcon } from 'lucide-react';
import Link from 'next/link';
import { useIsScrolled } from './hook/useIsScrolled';
import useProfile from './hook/useProfile';

const Header = ({ className }: { className?: string }) => {
  const { userProfile, isLoading } = useProfile();

  const isScrolled = useIsScrolled();

  return (
    <div
      className={cn(
        'flex-center t sticky top-0 z-100 h-20 w-full bg-neutral-400/5 text-white shadow-lg backdrop-blur-xs',
        isScrolled ? 'bg-neutral-800/25 backdrop-blur-xl' : 'bg-transparent',
        className
      )}
    >
      <div className='custom-container flex w-full max-w-360 items-center justify-between'>
        <Link href='/'>
          <div className='flex items-center gap-3.75'>
            <img src='/icons/logo.svg' alt='logo' width={42} height={42} />
            <div className='text-display-md font-extrabold'>Foody</div>
          </div>
        </Link>
        <div className='flex items-center justify-between gap-6'>
          <Link href='/cart'>
            <Button
              type='button'
              variant={'ghost'}
              className={cn(isScrolled ? 'hover:bg-neutral-200/25' : '')}
            >
              <ShoppingBasketIcon className='cart-icon' />
            </Button>
          </Link>

          {/* Profile */}
          {isLoading ? (
            <div>Loading</div>
          ) : userProfile ? (
            <div className='flex items-center gap-3'>
              <div className='flex-center h-12 w-12 rounded-full bg-neutral-500'>
                {userProfile.id}
              </div>
              <div className='flex flex-col'>
                <div className='text-lg font-semibold'>{userProfile.name}</div>
              </div>
            </div>
          ) : (
            <div>
              <Link href='/login'>
                <Button variant={'ghost'}>Sign In</Button>
              </Link>
              <Link href='/login'>
                <Button variant={'ghost'}>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
