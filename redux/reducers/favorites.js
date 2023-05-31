import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getFavorites = createAsyncThunk(
    'favorites/getFavorites',
    async (id, {rejectedWithValue}) => {
        try {
            const res = await axios(`http://localhost:4080/favorites?userId=${id}`)

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
    favorites: [],
    error: false,
    loading: false
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    extraReducers: {
        [getFavorites.pending]: (state) => {
            state.loading = true
            state.error = false
        },
        [getFavorites.rejected]: (state) => {
            state.loading = false
            state.error = true
        },
        [getFavorites.fulfilled]: (state, action) => {
            state.loading = false
            state.favorites = action.payload
        }
    }
})

export default favoritesSlice.reducer