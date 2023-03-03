// import { createSlice } from '@reduxjs/toolkit'

// export const demoSlice = createSlice({
//     name: "demoSlice",
//     initialState:{
//         value:0
//     },
//     reducers:{
//         increment :(state, action)=>{
//          state.value +=1;   
//         }
//     }
// })


// export const {increment} = demoSlice.actions;
// export default demoSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const DemoSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts:(state, action) =>{
      state.posts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    setError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setPosts, setLoading, setError } = DemoSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(setPosts(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default DemoSlice.reducer;


