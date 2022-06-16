import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import stockReducer from './stock';
import cartReducer from './cart';
import ordersReducer from "./orders";

const store = configureStore({
    reducer: {
        products: stockReducer,
        cart: cartReducer,
        orders: ordersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useappDispatch: () => AppDispatch = useDispatch;

export default store