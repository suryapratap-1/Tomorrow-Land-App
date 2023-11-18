import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const scrollSlice = createSlice({
    name: 'scrollItems',
    initialState,
    reducers: {
        scrollLeft: (state, action) => {},
        scrollRight: (state, action) => {}
    }
})