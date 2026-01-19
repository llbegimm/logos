// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.push({ 
//           ...action.payload, 
//           cartId: Date.now(),
//           quantity: 1 
//         });
//       }
//     },
//     removeFromCart: (state, action) => {
//       return state.filter(item => item.cartId !== action.payload);
//     },
//     updateQuantity: (state, action) => {
//       const { cartId, quantity } = action.payload;
//       const item = state.find(item => item.cartId === cartId);
//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//     clearCart: () => [],
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;