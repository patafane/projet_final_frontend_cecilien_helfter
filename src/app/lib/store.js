import { configureStore } from "@reduxjs/toolkit";
import ConnectSlice from "./features/ConnectSlice";
import randomCarrouSlice from "./features/randomCarrouSlice";
let store = ()=>{
    return configureStore({
        reducer:{
            connect : ConnectSlice,
            randomCarrou : randomCarrouSlice,
        }
    })
}
export default store