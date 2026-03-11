'use client';
import { registerScheme, type TregisterScheme } from '@/lib/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUp } from '../services/register';
import { useRouter } from 'next/navigation';
export const useRegisterForms = () => {
  // npm i react-hook-form
  // npm i zod
  //npm i @hookform/resolvers
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TregisterScheme>({ resolver: zodResolver(registerScheme) });

  const RegisterAccount = useMutation({
    mutationFn: async (payload: TregisterScheme) => signUp(payload),
    onSuccess: () => {
      setErrorMessage(undefined);
      reset();
      router.push('/login');
    },
    onError: (error: any) => {
      setErrorMessage(error?.response?.data?.message);
    },
  });

  const onSubmit = async (data: TregisterScheme) => {
    console.log(data);
    RegisterAccount.mutate(data);
  };

  return {
    register,
    onSubmit,
    errorMessage,
    handleSubmit,
    formstate: { errors, isSubmitting },
    errors,
    reset,
  };
};
