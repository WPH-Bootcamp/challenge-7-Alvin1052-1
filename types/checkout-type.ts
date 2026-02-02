import { TResponseBase } from './resto-type';

interface TCheckoutPayloadItem {
  menuId: number;
  quantity: number;
}

interface TCheckoutPayloadResto {
  restaurantId: number;
  items: TCheckoutPayloadItem[];
}

export interface CheckoutPayloadType {
  restaurants: TCheckoutPayloadResto[];
  deliveryAddress: string;
  phone: string;
  paymentMethod: string;
  notes: string;
}

type TCheckoutPricing = {
  subtotal: number;
  serviceFee: number;
  deliveryFee: number;
  totalPrice: number;
};

type TCheckoutRestoProfile = {
  id: number;
  name: string;
  logo: string;
};

type TCheckoutRestoItem = {
  menuId: number;
  menuName: string;
  price: number;
  image?: string;
  quantity: number;
  itemTotal: number;
};
type TCheckoutResto = {
  restaurant: TCheckoutRestoProfile;
  items: TCheckoutRestoItem[];
  subtotal: number;
};

type TResPostCheckoutTransaction = {
  id: number;
  transactionId: string;
  paymentMethod: string;
  status: string;
  deliveryAddress: string;
  phone: string;
  pricing: TCheckoutPricing;
  restaurants: TCheckoutResto[];
  createdAt: string;
};

type TResPostCheckoutData = {
  transaction: TResPostCheckoutTransaction;
};

export type TResPostCheckout = TResponseBase<TResPostCheckoutData>;

type TCheckoutPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

type TCheckoutFilter = {
  status: string;
};

type TCheckoutOrder = TResPostCheckoutTransaction & { updatedAt: string };

type TGetCheckoutData = {
  orders: TCheckoutOrder[];
  pagination: TCheckoutPagination;
  filter: TCheckoutFilter;
};

export type TResGetCheckout = TResponseBase<TGetCheckoutData>;
