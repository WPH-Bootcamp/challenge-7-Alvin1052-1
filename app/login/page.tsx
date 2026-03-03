import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignInForm from './components/signin-form';
import SignUpForm from './components/signup-form';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className='max-h-screen max-w-screen overflow-hidden'>
      <div className='flex h-screen w-full place-content-center place-items-center'>
        {/* Left side */}
        <div className='w-1/2'>
          <Image
            className='w-full'
            width={300}
            height={300}
            src={'/image/coverImage.svg'}
            alt='lol'
          />
        </div>

        {/* Right side */}
        <div className='flex-center w-1/2'>
          <div className='flex w-93.5 flex-col gap-5'>
            {/* Logo */}
            <div className='flex items-center gap-3.75'>
              <img src='/icons/logo.svg' alt='logo' width={42} height={42} />
              <div className='text-display-md text-base-black font-extrabold'>
                Foody
              </div>
            </div>
            {/* Welcome */}
            <div>
              <div className='text-display-sm font-extrabold'>Welcome Back</div>
              <div className='text-md font font-regular'>
                Good to see you again! Let’s eat
              </div>
            </div>
            {/* Tabs */}

            <Tabs defaultValue='signin' id='tabs'>
              <TabsList>
                <TabsTrigger value='signin'>Sign In</TabsTrigger>
                <TabsTrigger value='signup'>Sign Up</TabsTrigger>
              </TabsList>
              {/* Sign In */}
              <TabsContent value='signin'>
                <SignInForm />
              </TabsContent>
              {/* Sign Up */}
              <TabsContent value='signup'>
                <SignUpForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
