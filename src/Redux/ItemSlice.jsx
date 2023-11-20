import { createSlice } from "@reduxjs/toolkit";

 const ItemSlice = createSlice({
    name : "item",
    initialState:{
        products: [],
        userToken : null,
        token : localStorage.getItem("token")|| null,
        isSignIn : true
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
    
    setUserToken : (state,action)=>{
        state.userToken = action.payload
    },
    setSignIn: (state,action) =>{
        state.isSignIn = action.payload
    }

            }
        
},

)

export const {setToken, addProduct, setProducts, setUserToken,setSignIn} = ItemSlice.actions;
export const selectToken = (state)=>state.item.token
export const selectProduct= (state )=>state.item.products
export const selectUserToken = (state) => state.item.userToken


export default ItemSlice.reducer


