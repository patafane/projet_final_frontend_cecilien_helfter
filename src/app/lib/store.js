import { configureStore } from "@reduxjs/toolkit";
import ConnectSlice from "./features/ConnectSlice";
import randomCarrouSlice from "./features/randomCarrouSlice";
import bikesSlice from "./features/bikesSlice";
import usersSlice from "./features/usersSlice";
import cartSlice from "./features/cartSlice";
import favSlice from "./features/favSlice";
let store = ()=>{
    return configureStore({
        reducer:{
            connect : ConnectSlice,
            randomCarrou : randomCarrouSlice,
            bikes: bikesSlice,
            users: usersSlice,
            cart: cartSlice,
            favorite: favSlice
        }
    })
}
export default store