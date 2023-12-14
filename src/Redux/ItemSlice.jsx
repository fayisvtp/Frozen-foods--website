
import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
  name: "item",
  initialState: {
    products: [],
    userToken: localStorage.getItem("userToken") || null,
    token: localStorage.getItem("token") || null,
    isSignIn: true,
    // isCart: false,
    userId: localStorage.getItem("userId") || null,
    isAdmin :localStorage.getItem ("isAdmin")==='true'
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setUserToken: (state, action) => {
      state.userToken = action.payload;
      localStorage.setItem("userToken", action.payload);
    },

    setSignIn: (state, action) => {
      state.isSignIn = action.payload;
    },

    setUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload);
    },
    setAdmin:(state,action)=>{
      state.isAdmin=action.payload
      
    },
    clearIsAdmin: (state,action) => {
      state.isAdmin = action.payload;
      localStorage.setItem('isAdmin',action.payload.toString());
    },
  

  },
});

export const {
  setToken,
  addProduct,
  setProducts,
  setUserToken,
  setSignIn,
  setUserId,
  setAdmin,
  clearIsAdmin
} = ItemSlice.actions;

export const selectToken = (state) => state.item.token;
export const selectProduct = (state) => state.item.products;
export const selectUserToken = (state) => state.item.userToken;
export const SelectUserId = (state) => state.item.userId;
export const Select_admin_status = (state)=> state.item.isAdmin
export default ItemSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// const ItemSlice = createSlice({
//   name: "item",
//   initialState: {
//     products: [],
//     userToken: localStorage.getItem("userToken") || null,
//     token: localStorage.getItem("token") || null,
//     isSignIn: false,
//     isCart: false,
//     userId: localStorage.getItem("userId") || null,
//   },
//   reducers: {
//     setToken: (state, action) => {
//       state.token = action.payload;
//       localStorage.setItem("token", action.payload);
//     },

//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },

//     setUserToken: (state, action) => {
//       state.userToken = action.payload;
//       localStorage.setItem("userToken", action.payload);
//     },
//     setSignIn: (state, action) => {
//       state.isSignIn = action.payload;
//     },
//     setUserId: (state, action) => {
//       state.userId = action.payload;
//       localStorage.setItem("userId", action.payload);
//     },
  
//   },
// });

// export const {
//   setToken,
//   addProduct,
//   setProducts,
//   setUserToken,
//   setSignIn,
//   setUserId,

// } = ItemSlice.actions;


// export const selectToken = (state) => state.item.token;
// export const selectProduct = (state) => state.item.products;
// export const selectUserToken = (state) => state.item.userToken;
// export const SelectUserId = (state) => state.item.userId;
// export default ItemSlice.reducer;
