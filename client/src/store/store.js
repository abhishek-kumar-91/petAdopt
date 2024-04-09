import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "../Reducer/cartSlice"
import userReducer from "../Reducer/userSlice"

//newstore
const store = configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer
    },
});

export default store;