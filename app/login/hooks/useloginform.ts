'use client';
import { loginScheme, type TloginScheme } from '@/lib/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

import { useState } from 'react';
import { loginResponse } from '../types';
import { signIn } from '../services/login';
import { set } from 'zod';

export const useLoginForms = () => {
  // npm i react-hook-form
  // npm i zod
  //npm i @hookform/resolvers

  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TloginScheme>({ resolver: zodResolver(loginScheme) });

  const post = useMutation({
    mutationFn: async (payload: TloginScheme): Promise<loginResponse> =>
      signIn(payload),
    onSuccess: (res: loginResponse) => {
      setErrorMessage(undefined);
      router.push('/');
      localStorage.setItem('token', res?.data?.token || '');
    },

    onError: (error: any) => {
      setErrorMessage(error?.response?.data?.message);
    },
  });

  const onSubmit = async (data: TloginScheme) => {
    post.mutate(data);
  };

  return {
    register,
    onSubmit,
    handleSubmit,
    errorMessage,
    formstate: { errors, isSubmitting },
    errors,

    reset,
  };
};
