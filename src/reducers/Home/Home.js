import { createSlice } from "@reduxjs/toolkit";


const home=createSlice({
    name:"home",
    
    initialState:{
        home:[]
    },


reducers:{

},

extraReducers:(builder)=>{
    builder.addCase(getCategory.pending, (state, action) => {
        state.loading = true;
});

builder.addCase(getCategory.fulfilled, (state, action) => {
    state.loading = false;
    state.home = action.payload;
  });
  builder.addCase(getCategory.rejected, (state, action) => {
    state.loading = false;
  })
})


export default home.reducer;
