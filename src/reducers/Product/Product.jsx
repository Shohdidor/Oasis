import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../api/Product/AdidasPro";

const Product = createSlice ({
  name : "Product",
  initialState : {
    loading : false,
    obj : [],
    ProductObj : []
  },
  reducers : {
    setObjProduct : ( state , action ) => {
      state.ProductObj = [ action.payload ] 
      console.log( action.payload );
    }
  },
  extraReducers : (builder) => {
    builder . addCase ( getProduct . pending , ( state , action ) => {
      state . loading = true 
    });
    builder . addCase ( getProduct . fulfilled , ( state , action ) => {
      state . loading = false 
      state . obj = action . payload 
    });
    builder . addCase ( getProduct . rejected , ( state , action ) => {
      state . loading = false 
    })

  }
})

export const { setObjProduct } = Product.actions
export default Product.reducer