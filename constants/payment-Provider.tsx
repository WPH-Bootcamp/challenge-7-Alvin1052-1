export interface BankType {
  name: BankNameType;
  icon: string;
  checked: boolean;
}

export const BankingProvider = [
  { name: 'BCA', icon: '/icons/account-bca.svg', checked: false },
  {
    name: 'Mandiri',
    icon: '/icons/account-mandiri.svg',
    checked: false,
  },
  { name: 'BNI', icon: '/icons/account-bni.svg', checked: false },
  { name: 'BRI', icon: '/icons/account-bri.svg', checked: false },
] as const;

export type BankNameType = (typeof BankingProvider)[number]['name'];
