import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Order from "../models/Order";
import Product from "../models/Product";

const ordersSlice = createSlice({
    name: "orders",
    initialState: [] as Order[],
    reducers: {
        getOrders: () => {},
        addOrder: (state: Order[], action: PayloadAction<{amount: number, products: Product[]}>) => {
            const {products, amount} = action.payload
            state.unshift(
                new Order(
                    products,
                    amount,
                    new Date(),
                )
            )
        }
    }
});

export const getOrders = ordersSlice.actions.getOrders;
export const addOrder = ordersSlice.actions.addOrder;
export default ordersSlice.reducer;