import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";



export const store = configureStore ({
reducer:{
    item : ItemSlice
}

})