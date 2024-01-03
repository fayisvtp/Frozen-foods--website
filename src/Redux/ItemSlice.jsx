
import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
  name: "item",
  initialState: {
    products: [],
    userToken: localStorage.getItem("userToken") || null,
    token: localStorage.getItem("token") || null,
    isSignIn: true,
    userId: localStorage.getItem("userId") || null,
    isAdmin: localStorage.getItem("isAdmin") === "true",
    isuser: localStorage.getItem("isuser") === "true",
    resetStatus: null, // New state to manage password reset status
    resetToken: null, // New state to store reset token
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

    setUserLogin: (state, action) => {
      state.isuser = action.payload;
      localStorage.setItem("isuser", action.payload.toString());
    },

    clearUserLogin: (state) => {
      state.isuser = false;
      localStorage.removeItem("isuser");
    },

    setUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload);
    },

    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },

    clearIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
      localStorage.setItem("isAdmin", action.payload.toString());
    },

    clearUserId: (state) => {
      state.userId = null;
      localStorage.removeItem("userId");
    },

    clearUserToken: (state) => {
      state.userId = null;
      localStorage.removeItem("userId");
    },

    // New reducers for password reset
    setResetStatus: (state, action) => {
      state.resetStatus = action.payload;
    },

    setResetToken: (state, action) => {
      state.resetToken = action.payload;
    },

    clearResetStatusAndToken: (state) => {
      state.resetStatus = null;
      state.resetToken = null;
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
  clearIsAdmin,
  setUserLogin,
  clearUserId,
  clearUserToken,
  clearUserLogin,
  // Export the new reset actions
  setResetStatus,
  setResetToken,
  clearResetStatusAndToken,
} = ItemSlice.actions;

export const selectToken = (state) => state.item.token;
export const selectProduct = (state) => state.item.products;
export const selectUserToken = (state) => state.item.userToken;
export const SelectUserId = (state) => state.item.userId;
export const Select_admin_status = (state) => state.item.isAdmin;
export const selectResetStatus = (state) => state.item.resetStatus; // Selector for reset status
export const selectResetToken = (state) => state.item.resetToken; // Selector for reset token
export default ItemSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

// const ItemSlice = createSlice({
//   name: "item",
//   initialState: {
//     products: [],
//     userToken: localStorage.getItem("userToken") || null,
//     token: localStorage.getItem("token") || null,
//     isSignIn: true,
//     // isCart: false,
//     userId: localStorage.getItem("userId") || null,
//     isAdmin :localStorage.getItem ("isAdmin")==='true',
//     isuser : localStorage.getItem ("isuser")==='true'
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
//     setUserLogin: (state,action )=>{
//       state.isuser =action.payload
//       localStorage.setItem("isuser",action.payload.toString())
// },

//     clearUserLogin:(state)=>{
//       state.isuser = false
//       localStorage.removeItem('isuser')
//     },
//     setUserId: (state, action) => {
//       state.userId = action.payload;
//       localStorage.setItem("userId", action.payload);
//     },

//     setAdmin:(state,action)=>{
//       state.isAdmin=action.payload
      
//     },
//     clearIsAdmin: (state,action) => {
//       state.isAdmin = action.payload;
//       localStorage.setItem('isAdmin',action.payload.toString());
//     },
//     clearUserId :(state)=>{
//       state.userId = null;
//       localStorage.removeItem("userId")
//     },
//     clearUserToken : (state)=>{
//       state.userId = null;
//       localStorage.removeItem("userId")
//     }
//   },
// });


// export const {
//   setToken,
//   addProduct,
//   setProducts,
//   setUserToken,
//   setSignIn,
//   setUserId,
//   setAdmin,
//   clearIsAdmin,
//   setUserLogin,
//   clearUserId,
//   clearUserToken,
//   clearUserLogin
// } = ItemSlice.actions;

// export const selectToken = (state) => state.item.token;
// export const selectProduct = (state) => state.item.products;
// export const selectUserToken = (state) => state.item.userToken;
// export const SelectUserId = (state) => state.item.userId;
// export const Select_admin_status = (state)=> state.item.isAdmin
// export default ItemSlice.reducer;





// // import { createSlice } from "@reduxjs/toolkit";

// // const ItemSlice = createSlice({
// //   name: "item",
// //   initialState: {
// //     products: [],
// //     userToken: localStorage.getItem("userToken") || null,
// //     token: localStorage.getItem("token") || null,
// //     isSignIn: false,
// //     isCart: false,
// //     userId: localStorage.getItem("userId") || null,
// //   },
// //   reducers: {
// //     setToken: (state, action) => {
// //       state.token = action.payload;
// //       localStorage.setItem("token", action.payload);
// //     },

// //     setProducts: (state, action) => {
// //       state.products = action.payload;
// //     },

// //     setUserToken: (state, action) => {
// //       state.userToken = action.payload;
// //       localStorage.setItem("userToken", action.payload);
// //     },
// //     setSignIn: (state, action) => {
// //       state.isSignIn = action.payload;
// //     },
// //     setUserId: (state, action) => {
// //       state.userId = action.payload;
// //       localStorage.setItem("userId", action.payload);
// //     },
  
// //   },
// // });

// // export const {
// //   setToken,
// //   addProduct,
// //   setProducts,
// //   setUserToken,
// //   setSignIn,
// //   setUserId,

// // } = ItemSlice.actions;


// // export const selectToken = (state) => state.item.token;
// // export const selectProduct = (state) => state.item.products;
// // export const selectUserToken = (state) => state.item.userToken;
// // export const SelectUserId = (state) => state.item.userId;
// // export default ItemSlice.reducer;
