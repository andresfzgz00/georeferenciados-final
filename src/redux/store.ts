import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch,  } from "react-redux";
import thunkMiddleware from "redux-thunk";

import stockReducer from './stock';
import cartReducer from './cart';
import ordersReducer from "./orders";

const store = configureStore({
    reducer: {
        products: stockReducer,
        cart: cartReducer,
        orders: ordersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware)
});

type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store