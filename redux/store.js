import {configureStore} from "@reduxjs/toolkit";
import user from "@/redux/reducers/user";
import products from "@/redux/reducers/products";
import favorites from "@/redux/reducers/favorites";
import basket from "@/redux/reducers/basket";

const store = configureStore({
    reducer: {
        user,
        products,
        favorites,
        basket
    }
})

export default store