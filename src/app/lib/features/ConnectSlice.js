import { createSlice } from "@reduxjs/toolkit";
let ConnectSlice = createSlice({
    name: "connect",
    initialState:{
        value: false,
    },
    reducers:{
        setConnectTrue:(state)=>{
            state.value = true
            console.log(state.value);
        },
        setConnectFalse:(state)=>{
            state.value = false
            console.log(state.value);
        }
    },
})
export const {setConnectFalse,setConnectTrue} = ConnectSlice.actions
export default ConnectSlice.reducer