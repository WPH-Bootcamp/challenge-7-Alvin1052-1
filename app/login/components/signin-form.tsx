'use client';
import Textbox from '@/components/textbox/page';
import { Button } from '@/components/ui/button';
import { useLoginForms } from '../hooks/useloginform';

const SignInForm = () => {
  const {
    register,
    formstate: { errors, isSubmitting },
    handleSubmit,
    errorMessage,
    onSubmit,
  } = useLoginForms();

  return (
    <form
      className='mt-5 flex w-full flex-col gap-5'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Textbox
          {...register('email')}
          id='email'
          placeholder='Email'
          type='text'
        />
        {errors.email && <p className='text-red-300'>{errors.email.message}</p>}
      </div>

      <div>
        <Textbox
          {...register('password')}
          id='password'
          placeholder='password'
          type='password'
        />
        {errors.password && (
          <p className='text-red-300'>{errors.password.message}</p>
        )}
      </div>

      <div className='flex items-center gap-2'>
        <input id='remember' type='checkbox' className='text-2xl' />
        Remember Me
      </div>

      <div>
        {errorMessage && <p className='text-red-300'>{errorMessage}</p>}
        <Button type='submit' disabled={isSubmitting} className='w-full'>
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
