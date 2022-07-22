// First of all i setuped store.js in redux
// then after i create cart slice

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modalSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    user: userReducer,
  },
});
