export const CatMenuType = ['all', 'drink', 'main', 'dessert'];

interface CatType {
  value: (typeof CatMenuType)[number];
  label: string;
}

export const catMenu: CatType[] = [
  {
    value: 'all',
    label: 'All Menu',
  },
  {
    value: 'main',
    label: 'Main',
  },
  {
    value: 'drink',
    label: 'Drink',
  },
  {
    value: 'dessert',
    label: 'Dessert',
  },
];
