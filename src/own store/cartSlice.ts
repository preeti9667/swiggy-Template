import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  category: string;
  description: string;
  imageId: string;
  price: number;
  ratings: {
    aggregatedRating: {
      rating: string;
    };
  };
}

interface CartState {
  item: CartItem[];
}

const CART_KEY = 'CART';

// Utility to save cart to localStorage
const saveToLocalStorage = (cart: CartState) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
};

// Load cart from localStorage
const loadFromLocalStorage = (): CartState => {
  if (typeof window !== "undefined") {
    const data = window.localStorage.getItem(CART_KEY);
    if (data) {
      return JSON.parse(data);
    }
  }
  return { item: [] };
};

const initialState: CartState = loadFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.item.push(action.payload);
      saveToLocalStorage(state);
    },
    clearCart: (state) => {
      state.item = [];
      saveToLocalStorage(state);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.item = state.item.filter(item => item.id !== action.payload);
      saveToLocalStorage(state);
    }
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
