import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [], 
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.map(product => ({
        ...product,
        quantity: 1, // Default quantity for each product
      }));
      state.totalQuantity = state.products.reduce((sum, product) => sum + product.quantity, 0);
      state.totalAmount = state.products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.quantity++;
        state.totalQuantity++;
        state.totalAmount += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload);
      if (product && product.quantity > 0) {
        product.quantity--;
        state.totalQuantity--;
        state.totalAmount -= product.price;
      }
    },
  },
});

export const { setProducts, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
