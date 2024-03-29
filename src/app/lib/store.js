import { configureStore } from "@reduxjs/toolkit";
import ConnectSlice from "./features/ConnectSlice";
import randomCarrouSlice from "./features/randomCarrouSlice";
import bikesSlice from "./features/bikesSlice";
let store = ()=>{
    return configureStore({
        reducer:{
            connect : ConnectSlice,
            randomCarrou : randomCarrouSlice,
            bikes: bikesSlice,
        }
    })
}
export default store