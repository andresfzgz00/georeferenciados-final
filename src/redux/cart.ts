import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Product from "../models/Product";
import { RootState } from "./store";

const cartSlice = createSlice({
    name: "cart",
    initialState: [] as Product[],
    reducers: {
        addToCart: (state: Product[], action: PayloadAction<Product>) => {
            const newCartItem = action.payload
            const productIndex = state.findIndex(cartItem => cartItem.name === newCartItem.name);

            if (productIndex < 0) {
                const { name, image, price, quantity } = newCartItem;
                state.push(new Product(name, image, price, 1));
                return;
            }

            state[productIndex].quantity++;

        },

        removeFromCart: (state: Product[], action: PayloadAction<string>) => {
            state.filter(product => product.name !== action.payload);
        }
    }
});

export const addToCart = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;

export default cartSlice.reducer