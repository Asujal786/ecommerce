// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

function CartData() {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: CartData(),
    reducers: {
        add(state, action) {
            state.push(action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state));
        },
        remove(state, action) {
            const itemId = action.payload;
            const newState = state.filter(item => item.id !== itemId);
            localStorage.setItem("cartItems", JSON.stringify(newState));
            return newState;
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
