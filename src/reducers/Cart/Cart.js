import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../api/Cart/Cart";
import { totalProductsGet } from "../../api/Cart/Cart";

const Cart = createSlice ({
    name : "Cart" ,
    initialState : {
        loading : false,
        getObj : [],
        // getObjCart : []
    },
    reducers : {
        
    },
    extraReducers : ( builder ) => {
        builder . addCase ( getCart . pending , ( state , action ) => {
            state . loading = true
        });
        builder . addCase ( getCart . fulfilled , ( state , action ) => {
            state . loading = false ,
            state . getObj = action . payload 
        }),
        builder . addCase ( totalProductsGet . fulfilled , ( state , action ) => {
            state . loading = false ,
            state . getObjCart = action . payload 
        }),
        builder . addCase ( getCart . rejected , ( state , action ) => {
            state . loading = false 
        })
    }
})

export const { } = Cart . actions 
export default Cart.reducer