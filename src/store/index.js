import { configureStore } from "@reduxjs/toolkit";
import post from "./post";

export const store = configureStore({
    reducer:{
        post
    }
})

export default store