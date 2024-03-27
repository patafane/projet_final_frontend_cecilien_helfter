import { configureStore } from "@reduxjs/toolkit";
import ConnectSlice from "./features/ConnectSlice";
let store = ()=>{
    return configureStore({
        reducer:{
            connect : ConnectSlice
        }
    })
}
export default store