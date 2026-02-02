'use client';
import { getRestaurant } from '@/services/resto-services';
import { filterPayload } from '@/types/resto-type';
import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';

export const useFilteredItems = () => {
  const initialFilter: Partial<filterPayload> = {
    range: null,
    priceMin: null,
    priceMax: null,
    rating: null,
    location: null,
    category: null,
    page: 1,
    limit: 50,
  };
  const [filter, setFilter] = useState<Partial<filterPayload>>(initialFilter);
  // const [debounceFilter] = useDebounce(filter, 1000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('filter', filter);

    const KeyFilter = e.target.name as keyof filterPayload;
    const value = Number(e.target.value);

    // if (KeyFilter.length === 0) {
    //   setFilter(null);
    // } else {
    setFilter({ ...filter, [KeyFilter]: value });
  };

  const resetFilter = () => {
    setFilter(initialFilter);
  };

  const {
    data: RestoToDisplay,
    isFetching,
    error,
    isPending,
  } = useQuery({
    queryKey: ['Category', filter],
    queryFn: async () =>
      await getRestaurant(filter).then((res) =>
        res.data.restaurants.sort((a, b) => a.star - b.star)
      ),
    initialData: [],
  });

  console.log('RestoToDisplay', RestoToDisplay);
  return {
    RestoToDisplay,
    isFetching,
    isPending,
    error,
    filter,
    handleChange,
    resetFilter,
  };
};
