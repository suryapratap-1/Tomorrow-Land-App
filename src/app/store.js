import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/add to cart/cartSlice";
import wishListSlice from "../features/wishlist/wishListSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: wishListSlice
    }
})