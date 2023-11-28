import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async () => {
        const {data} = await axios.get("http://localhost:8000/api/v1/blogs");
        return data;
    }
)

export const addBlogs = createAsyncThunk(
    'blogs/addBlogs',
    async (inputs) => {
        const {data} = await axios.post("http://localhost:8000/api/v1/project",inputs);
        return data;
    }
)

const initialState ={
    blogs:[],
    loading:false,
    error:null
}
const blogsSlice = createSlice({
    name:"blogs",
    initialState,
    reducers:{

    },

    extraReducers:(builder)=>{
        builder
        .addCase(getBlogs.pending,(state, action)=>{
            state.loading=true
        })
        .addCase(getBlogs.fulfilled,(state, action)=>{
            state.blogs=action.payload.blogs
            state.loading=false
        })
        .addCase(getBlogs.rejected,(state, action)=>{
            state.loading=false
            state.error=action.payload.error
        })


        .addCase(addBlogs.pending,(state, action)=>{
            state.loading=true
        })
        .addCase(addBlogs.fulfilled,(state, action)=>{
            state.blogs.push(action.payload.blog)
            state.loading=false
        })
        .addCase(addBlogs.rejected,(state, action)=>{
            state.loading=false
            state.error=action.payload.error
        })
    }
})


export default blogsSlice.reducer;
