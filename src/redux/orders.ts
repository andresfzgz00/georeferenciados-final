import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import Order from "../models/Order";
import Product from "../models/Product";
import axios from "../util/axios";

interface OrderDto {
    amount: number,
    products: Product[],
    date?: Date
}

export const addOrder = createAsyncThunk(
    'orders/add',
    async (order: OrderDto) => {
        const { products, amount } = order;
        const newOrder = new Order(
            products,
            amount,
            new Date(),
        );

        const response = await axios.post('/orders.json', newOrder)

        newOrder.id = response.data.name;

        return newOrder;
    }
)

export const getOrders = createAsyncThunk(
    'orders/get',
    async () => {
        const response = await axios.get('/orders.json');
        return response.data
    }
);

const ordersSlice = createSlice({
    name: "orders",
    initialState: [] as Order[],
    reducers: {},
    extraReducers: {
        [addOrder.fulfilled.type]: (state: Order[], action: PayloadAction<Order>) => {
            state.unshift(action.payload);
        },
        [getOrders.fulfilled.type]: (state: Order[], action: PayloadAction<{[key: string]: Order}>) => {
            const orders: Order[] = [];
            const orderObj = action.payload
            for (const key in orderObj) {
                const order = orderObj[key];
                order.id = key;
                order.date = new Date(order.date);
                orders.push(order)
            }

            return orders;
        }

    }
});

export default ordersSlice.reducer;