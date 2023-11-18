import { createSlice } from "@reduxjs/toolkit";

 const ItemSlice = createSlice({
    name : "item",
    initialState:{
        products: [],
        token : localStorage.getItem("token")|| null,
    },
    reducers : {
       setToken:(state, action) => {
        state.token = action.payload;
        localStorage.setItem('token',action.payload)
        console.log(state.token);
       },

    // addProduct: (state,action)=>{
    //     state.products.push(action.payload)
    //     console.log(state.products);

    // },
    setProducts : (state,action)=>{
        state.products = action.payload
    },   
            }
        
},

)

export const {setToken, addProduct, setProducts} = ItemSlice.actions;
export const selectToken = (state)=>state.item.token
export const selectProduct= (state )=>state.item.products
export default ItemSlice.reducer


