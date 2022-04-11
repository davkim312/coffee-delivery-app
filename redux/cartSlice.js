import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1; // will increase the item number in cart
            state.total += action.payload.price * action.payload.quantity; // this will update the price of the items in cart
        },
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;