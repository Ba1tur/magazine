import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (name, {rejectedWithValue}) => {
        try {
           const res = await axios(`http://localhost:4080/products`)

            if (res.statusText !== 'OK') {
                throw new Error("Произошла ошибка")
            }
            return res.data
        }catch (err){
            console.log(rejectedWithValue(err.message))
        }
    }
)

const initialState = {
    products: [],
    error: false,
    loading: false
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true
            state.error = false
        },
        [getProducts.rejected]: (state) => {
            state.error = true
            state.loading = false
        },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload
            state.loading = false
            state.error= false
        }
    }
})

export default productsSlice.reducer


