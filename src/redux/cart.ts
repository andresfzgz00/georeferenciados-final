import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Product from "../models/Product";

interface CartSlice {
    amount: number,
    items: Product[]
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        amount: 0,
        items: []
    },
    reducers: {
        addToCart: (state: CartSlice, action: PayloadAction<Product>) => {
            const newCartItem = action.payload;
            const productIndex = state.items.findIndex(cartItem => cartItem.name === newCartItem.name);

            if (productIndex < 0) {
                const { name, image, price } = newCartItem;
                state.items.unshift(new Product(name, image, price, 1));
            }
            else {
                state.items[productIndex].quantity++;
            }
            state.amount += newCartItem.price;

        },

        removeFromCart: (state: CartSlice, action: PayloadAction<Product>) => {
            state.items = state.items.filter(product => {
                if(product.name === action.payload.name) {
                    state.amount -= product.quantity * product.price;
                    return false;
                }
                return true;
            });
        },

        clearCart: (state: CartSlice) => {
            state.items = [];
            state.amount = 0;
        }
    }
});

export const addToCart = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export const clearCart = cartSlice.actions.clearCart;

export default cartSlice.reducer