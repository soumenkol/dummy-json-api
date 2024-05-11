import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"

const initialState=[]
const cartSlice = createSlice({
    
    name: 'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
            toast.success("add a new product to cart", {
                position: "top-right"
            })
        },

       remove(state,action){
        toast.success("remove a  product from cart", {
            position: "top-right"
        })
        return state.filter(item => item.id !== action.payload)
       
    }
}
});
export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;