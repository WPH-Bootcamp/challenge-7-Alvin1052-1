import { InputCartItemType, ListCartStoreType } from '@/types/store-type';
import { createSlice } from '@reduxjs/toolkit';

interface CartListState {
  cartStore: ListCartStoreType;
  isloading: boolean;
  error: string | null;
}

const initialState: CartListState = {
  cartStore: {
    cart: [],
    summary: { restaurantCount: 0, totalItems: 0, totalPrice: 0 },
  },
  isloading: false,
  error: null,
};

const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    AddReduceFromCart: (state, action: { payload: InputCartItemType }) => {
      const { restaurant, menu: menuPayload, method } = action.payload;

      const restoStored = state.cartStore.cart.find(
        (resto) => resto.restaurant.id === restaurant.id
      );

      if (!restoStored) {
        if (method === 'reduce') return;

        state.cartStore.cart.push({
          restaurant: {
            id: restaurant.id,
            name: restaurant.name,
            logo: restaurant.logo,
          },
          items: [menuPayload],
          subtotal: menuPayload.total,
        });

        return;
      }

      const menuStored = restoStored.items.find(
        (menu) => menu.id === menuPayload.menu.id
      );

      if (!menuStored) {
        if (method === 'reduce') return;
        restoStored.items.push(menuPayload);
        restoStored.subtotal += menuPayload.total;
        return;
      }

      if (method === 'add') {
        menuStored.quantity += 1;
        menuStored.total += menuStored.menu.price;
      } else if (method === 'reduce') {
        if (menuStored.quantity <= 0) return;
        menuStored.quantity -= 1;
        menuStored.total -= menuStored.menu.price;
      }

      if (menuStored.quantity <= 0) {
        restoStored.items = restoStored.items.filter(
          (menu) => menu.id !== menuPayload.id
        );
      }

      if (restoStored.items.length <= 0) {
        state.cartStore.cart = state.cartStore.cart.filter(
          (resto) => resto.restaurant.id !== restaurant.id
        );
      }

      restoStored.subtotal = restoStored.items.reduce(
        (sum, m) => sum + m.total,
        0
      );
    },
    removeMenuFromCart: (state, action: { payload: InputCartItemType }) => {
      const { restaurant, menu: menuPayload } = action.payload;

      const restoStored = state.cartStore.cart.find(
        (resto) => resto.restaurant.id === restaurant.id
      );

      if (!restoStored) return;

      restoStored.items = restoStored.items.filter(
        (menu) => menu.id !== menuPayload.id
      );

      restoStored.subtotal = restoStored.items.reduce(
        (sum, m) => sum + m.total,
        0
      );

      if (restoStored.items.length <= 0) {
        state.cartStore.cart = state.cartStore.cart.filter(
          (resto) => resto.restaurant.id !== restaurant.id
        );
      }
    },
    removeRestoFromCart: (state, action: { payload: InputCartItemType }) => {
      const { restaurant } = action.payload;

      state.cartStore.cart = state.cartStore.cart.filter(
        (resto) => resto.restaurant.id !== restaurant.id
      );
    },
    reCountSummaryCart: (state) => {
      // Count Number of Restaurants
      state.cartStore.summary.restaurantCount = state.cartStore.cart.length;
      //Count Number of Items(Menu)
      state.cartStore.summary.totalItems = state.cartStore.cart.reduce(
        (sum, resto) => sum + resto.items.length,
        0
      );
      // Count Total Cart Value
      state.cartStore.summary.totalPrice = state.cartStore.cart.reduce(
        (sum, resto) => sum + resto.subtotal,
        0
      );
    },
  },
});

export const {
  AddReduceFromCart,
  removeMenuFromCart,
  removeRestoFromCart,
  reCountSummaryCart,
} = cartListSlice.actions;

export default cartListSlice.reducer;
