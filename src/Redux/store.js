import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart.js"
import authenticationreducer from "./features/authentication.js"
import searchReducer from "./features/search.js"

export default configureStore({
    reducer: {
        cart: cartReducer,
        authentication: authenticationreducer,
        search:searchReducer,
        
    }
})