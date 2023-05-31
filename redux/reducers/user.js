import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
    'user/getUser',
    async(id,{rejectedWithValue}) => {
        try {
            const res = await axios(`http://localhost:4080/users?id=${id}`)

            if (res.statusText !== 'OK') {
                throw new Error("Произошла ошибка")
            }
            return res.data[0]
        }catch (err){
            return rejectedWithValue(err.message)
        }
    }
)

const initialState = {
    user: {},
    error: "",
    status: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increment(state,action){
            state.user = action.payload
        },
        logout: (state,action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [getUser.rejected]: (state, action) => {
            state.error = action.payload
            state.status = 'error'
        },
        [getUser.pending]: (state) => {
            state.status = 'loading'
        },
        [getUser.fulfilled]: (state, action) => {
            state.status = true
            state.user = action.payload
        }
    }
})

export const {logout, increment} =userSlice.actions
export default userSlice.reducer
