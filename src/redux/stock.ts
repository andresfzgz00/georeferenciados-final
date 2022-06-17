import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import Product from "../models/Product";
import axios from '../util/axios';

export const getProducts = createAsyncThunk(
    'stock/getProducts',
    async () => {
        const response = await axios.get('/products.json');
        return response.data;
    }
)

interface ProductDto {
    name: string,
    image: string,
    price: number,
    quantity: number
}

const stockSlice = createSlice({
    name: "stock",
    initialState: [] as Product[],
    reducers: {},
    extraReducers: {
        [getProducts.fulfilled.type]: (state: Product[], action: PayloadAction<ProductDto[]>) => {
            const products: Product[] = []
            action.payload.forEach((product, i) => {
                const { name, image, price, quantity } = product
                products.push(
                    new Product(
                        name,
                        image,
                        price,
                        quantity,
                        i.toString()
                    )
                )
            })
            return products;
        }

    }
});

export default stockSlice.reducer;