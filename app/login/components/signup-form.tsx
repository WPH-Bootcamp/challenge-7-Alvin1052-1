'use client';
import Textbox from '@/components/textbox/page';
import { Button } from '@/components/ui/button';
import { useRegisterForms } from '../hooks/useregisterform';
import { useState } from 'react';

const SignUpForm = () => {
  const {
    register,
    onSubmit,
    handleSubmit,
    errorMessage,
    formstate: { errors, isSubmitting },
  } = useRegisterForms();
  return (
    <form
      className='mt-5 flex w-full flex-col gap-5'
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Name */}
      <div>
        <Textbox
          {...register('name')}
          id='name'
          placeholder='name'
          type='text'
        />
        {errors.name && <p className='text-red-300'>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <Textbox
          {...register('email')}
          id='email'
          placeholder='Email'
          type='email'
        />
        {errors.email && <p className='text-red-300'>{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <Textbox
          {...register('phone')}
          id='phone'
          placeholder='phone number'
          type='number'
        />
        {errors.phone && <p className='text-red-300'>{errors.phone.message}</p>}
      </div>
      {/* Password */}
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
      {/* confirm password */}
      <div>
        <Textbox
          {...register('confirmPassword')}
          id='confirmpassword'
          placeholder='Confirm Password'
          type='password'
        />
        {errors.confirmPassword && (
          <p className='text-red-300'>{errors.confirmPassword.message}</p>
        )}
      </div>

      <div>
        {errorMessage && <p className='text-red-300'>{errorMessage}</p>}
        <Button type='submit' disabled={isSubmitting} className='w-full'>
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
