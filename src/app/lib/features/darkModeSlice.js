import { createSlice } from "@reduxjs/toolkit";
const darkModeSlice = createSlice({
    name:"darkMode",
    initialState:{
        value:false
    },
    reducers:{
        setDarkModeOn:(state)=>{
            state.value = true
        },
        setDarkModeOff:(state)=>{
            state.value = false
        }
    }
})
export const {setDarkModeOff,setDarkModeOn} = darkModeSlice.actions
export default darkModeSlice.reducer