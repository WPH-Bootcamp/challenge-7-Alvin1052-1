interface FilterType {
  value: string;
  label: string;
}

export const DistanceFilter: FilterType[] = [
  {
    value: '0',
    label: 'Nearby',
  },
  {
    value: '1',
    label: 'Within 1 km',
  },
  {
    value: '3',
    label: 'Within 3 km',
  },
  {
    value: '5',
    label: 'Within 5 km',
  },
];

export const RatingFilter: FilterType[] = [
  {
    value: '0',
    label: 'All Rating',
  },
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
];
