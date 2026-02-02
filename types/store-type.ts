export interface CartItemByRestoType {
  restaurantId: number;
  menus: CartItem[];
  subtotal: number;
}

export interface ListCartStoreType {
  cart: CartItemByRestoObjectType[];
  summary: { restaurantCount: number; totalItems: number; totalPrice: number };
}

export interface CartItem {
  id: number;
  menu: MenuType;
  quantity: number;
  total: number;
}

export type MenuType = {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
};

// export const CatMenuType = ['all', 'drink', 'main', 'dessert'];

export interface CartItemByRestoObjectType {
  restaurant: CartResto;
  items: CartItem[];
  subtotal: number;
}

export interface CartResto {
  id: number;
  name: string;
  logo: string;
}

export interface InputCartItemType {
  restaurant: PayloadRestaurantType;
  menu: CartItem;
  method?: 'add' | 'reduce';
}

export interface PayloadRestaurantType {
  id: number;
  name: string;
  logo: string;
}
