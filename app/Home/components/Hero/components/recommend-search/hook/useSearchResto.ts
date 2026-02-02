'use client';
import { getRestaurant } from '@/services/resto-services';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const useSearchResto = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isFocus, setIsFocus] = useState(false);

  const payload = { q: keyword, page, limit };

  const { data: SearchData, isLoading } = useQuery({
    queryKey: ['Resto', payload],
    queryFn: () => getRestaurant().then((res) => res.data),
  });

  return {
    SearchData,
    isLoading,
    setKeyword,
    setPage,
    setLimit,
    keyword,
    isFocus,
    setIsFocus,
  };
};

export default useSearchResto;
