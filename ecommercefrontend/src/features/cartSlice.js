import { createSlice } from "@reduxjs/toolkit";


function CartData() {
        const data = localStorage.getItem("cartItems");
        if (!data) {
          return [];
        } else {
          const newData = JSON.parse(data);
          return newData;
        }
}
      



const cartSlice = createSlice({

    name: "cartSlice",
    initialState: CartData,
    reducers: {
        add(state, action) {
            state.push(action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state))
        },
        remove(state, action) {
     
            const newstate=state.filter((item) => item.id !== action.payload)
            localStorage.setItem("cartItems", JSON.stringify(newstate))
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
