import { configureStore } from "@reduxjs/toolkit";
import Product from "../reducers/Product/Product";
import Cart from "../reducers/Cart/Cart";

export const store=configureStore({
    reducer:{
        Product : Product,
        Cart : Cart
    }
})