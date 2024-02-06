import Layout from "../Layout/Layout";
import Basket from "../pages/Basket/Basket";
import Home from "../pages/Home/Home";
import { configureStore } from "@reduxjs/toolkit";



export const store=configureStore({
    reducer:{
        Layout,
        Home,
        Basket
    }
})