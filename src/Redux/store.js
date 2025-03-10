import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart.js"


export default configureStore({
    reducer: {
        cart:cartReducer,
    }
})