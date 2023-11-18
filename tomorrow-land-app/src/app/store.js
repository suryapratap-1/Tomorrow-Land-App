import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/add to cart/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})