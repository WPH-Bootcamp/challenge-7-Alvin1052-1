import { TResponseBase } from './resto-type';

export interface AddReduceCartPayloadType {
  restaurantId: number;
  menuId: number;
  quantity: number;
}

type AddReduceRestoType = {
  id: number;
  name: string;
  logo: string;
};

type AddReduceMenuType = {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
};

type AddReduceDataType = {
  cartItem: AddReduceCartItemType;
};

type AddReduceCartItemType = {
  id: number;
  restaurant: AddReduceRestoType;
  menu: AddReduceMenuType;
  quantity: number;
  itemTotal: number;
};

export type TResponseAddCart = TResponseBase<AddReduceDataType>;

type GetCartDataCartType = {
  restaurant: AddReduceRestoType;
  items: Omit<AddReduceCartItemType, 'restaurant'>[];
  subtotal: number;
};

type GetCartDataSummaryType = {
  totalItems: number;
  totalPrice: number;
  restaurantCount: number;
};
type GetCartDataType = {
  cart: GetCartDataCartType[];
  summary: GetCartDataSummaryType;
};

export type TResponseGetCart = TResponseBase<GetCartDataType>;

export type TResponseDeleteCart = { success: boolean; message: string };
