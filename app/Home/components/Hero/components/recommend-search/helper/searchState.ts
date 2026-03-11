'use client';
import { useState } from 'react';

export const SearchState = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isFocus, setIsFocus] = useState(false);
  const payload = { q: keyword, page, limit };

  return {
    keyword,
    setKeyword,
    page,
    setPage,
    limit,
    setLimit,
    isFocus,
    setIsFocus,
    payload,
  };
};
