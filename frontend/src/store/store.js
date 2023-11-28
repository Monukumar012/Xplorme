import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../slices/blogsSlice'



const store = configureStore({
    reducer:{
        blogs:blogsReducer,
    }
})


export default store;