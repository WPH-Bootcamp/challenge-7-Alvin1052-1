'use client';
import { getRestoByName } from '@/services/resto-services';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const useSearch = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isFocus, setIsFocus] = useState(false);
  const payload = { q: keyword, page, limit };

  //run di server
  // console.log('payload', payload);
  // const { data: SearchData, isLoading } = useQuery({
  //   queryKey: ['search', payload],
  //   queryFn: () => getRestoByName(payload).then((res) => res.data),
  //   staleTime: 10000,
  // });

  const SearchData: any[] = [];
  const isLoading = false;

  // const SearchData: TGetRestoByName = {
  //   pagination: { page: 1, totalPages: 1, limit: 1, total: 1 },
  //   restaurants: [],
  //   searchQuery: '',
  // };

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

export default useSearch;
