import { axiosRequest } from "../../utils/axiosRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";


// getProduct 
export const getProduct = createAsyncThunk ( "todo/getProduct" , async () => {
    try {
        let { data } = await axiosRequest.get(`Product/get-products`)
        return data?.data
    } catch (error) {
        console.log(error);
    }
})
