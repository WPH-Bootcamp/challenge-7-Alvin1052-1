'use client';
import { BankNameType } from '@/constants/payment-Provider';
import { useAppSelector } from '@/features/cart/hooks/store-hooks';
import { getProfile } from '@/layout/header/services';
import { getRestoById } from '@/services/resto-services';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const useCheckout = (id: string) => {
  const { cartStore, isloading } = useAppSelector((state) => state.cart);
  const [selectBank, setSelectBank] = useState<BankNameType>();
  const DisplayCart = cartStore.cart.find(
    (resto) => resto.restaurant.id === Number(id)
  );

  const subtotal = DisplayCart?.subtotal ?? 0;
  const DeliveryFee: number = DisplayCart?.subtotal ? 10000 : 0;
  const ServiceFee: number = DisplayCart?.subtotal ? 1000 : 0;
  const TotalPrice: number = subtotal + DeliveryFee + ServiceFee;

  const handleSelectBank = (bank: BankNameType) => {
    setSelectBank(bank);
  };

  const { data, isLoading: isLoadingAddress } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile().then((res) => res.data),
  });

  const DeliveryAddress: string = 'cikarang';
  const CustomerPhone: string = data?.phone ?? '';
  return {
    isLoadingAddress,
    DeliveryAddress,
    CustomerPhone,
    DisplayCart,
    isloading,
    handleSelectBank,
    subtotal,
    DeliveryFee,
    ServiceFee,
    TotalPrice,
    selectBank,
  };
};
