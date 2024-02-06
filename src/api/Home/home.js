import { axiosRequest } from "../../utils/axiosRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";



// getCategoryies
export const getCategory=createAsyncThunk("todo/getCategory",
  async ()=>{
    try {
      let {data}=await axiosRequest.get(`Category/get-categories`)
     console.log(data.data);
      return data.data
    } catch (error) {
      console.log(error);
    }
  }
)