import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addWish: (state, action) => {
            state.push(action.payload);
        },
        removeWish: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

export const { addWish, removeWish } = wishListSlice.actions;
export default wishListSlice.reducer;