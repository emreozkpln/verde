import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[]
}

export const post = createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPost:(state,action)=>{
            state.posts = [
                ...state.posts,
                action.payload
            ]
        },
        deletePost:(state,action)=>{
            state.posts=state.posts.filter(post=>post.id!==action.payload)
        }
    }
})

export const {addPost,deletePost} = post.actions
export default post.reducer