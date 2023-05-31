import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getBasket = createAsyncThunk(
    'basket/getBasket',
    async (id, {rejectedWithValue}) => {
        try {
            const res = await axios(`http://localhost:4080/basket?userId=${id}`)

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
    basket: [],
    error: false,
    loading: false
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    extraReducers: {
        [getBasket.pending]: (state) => {
            state.loading = true
            state.error = false
        },
        [getBasket.rejected]: (state, action) => {
            state.error = true
            state.loading = false
        },
        [getBasket.fulfilled]: (state, action) => {
            state.loading = true
            state.basket = action.payload
            state.loading = false
        }
    }
})

export default basketSlice.reducer