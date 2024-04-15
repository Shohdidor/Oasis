import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

// GET CART

export const getCart = createAsyncThunk("todo/getCart", async () => {
  try {
    let { data } = await axiosRequest.get(`Cart/get-products-from-cart`);
    console.log(data?.data[0].productsInCart);
    return data?.data[0].productsInCart;
  } catch (error) {
    console.log(error);
  }
});

// POST CART

export const postCart = createAsyncThunk("todo/postCart", async (id , { dispatch }) => {
  try {
      let { data } = await axiosRequest.post(`Cart/add-product-to-cart?id=${id}`);
      dispatch ( totalProductsGet () )
    return data?.data[0].productsInCart;
} catch (error) {
    console.log(error);
}
});

// DELETE CART

export const deleteCart = createAsyncThunk(
  "todo/deleteCart",
  async (id, { dispatch }) => {
    try {
      let { data } = await axiosRequest.delete(
        `Cart/delete-product-from-cart?id=${id}`
      );
      dispatch(getCart());
      dispatch ( totalProductsGet ())

      return data?.data[0].productsInCart;
    } catch (error) {
      console.log(error);
    }
  }
);


// export const increment = createAsyncThunk(
    //   "todo/increment",
    //   async (id, { dispatch }) => {
        //     try {
            //       let { data } = await axiosRequest.delete(
                //         `Cart/delete-product-from-cart?id=${id}`
                //       );
//       dispatch(getCart());
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const decrement = createAsyncThunk(
    //   "todo/decrement",
    //   async (id, { dispatch }) => {
        //     try {
            //       let { data } = await axiosRequest.put(
                //         `Cart/reduce-product-in-cart?id=${id}`
                //       );
//       dispatch(getCart());
//     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // );
    

    // totalProducts Cart 

export const totalProductsGet = createAsyncThunk("todo/totalproductGet", async ( ) => {
      try {
        let { data } = await axiosRequest.get(`Cart/get-products-from-cart`);
        console.log(data?.data);
        return data?.data;
      } catch (error) {
        console.log(error);
      }
    });