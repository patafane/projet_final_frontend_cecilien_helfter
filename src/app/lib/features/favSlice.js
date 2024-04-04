import { createSlice } from "@reduxjs/toolkit";
const favSlice = createSlice({
    name: "favorite",
    initialState:{
        value:[],
    },
    reducers:{
        addFav:(state,action)=>{
            const existingItem = state.value.find((item) => item.name === action.payload.name);
            if (existingItem) {
                alert(`${action.payload.name} est déjà dans vos favoris.`)
            } else {
                state.value.push(action.payload)
            }
        },
        removeAllFav:(state)=>{
            state.value = []
        },
        removeFromFav:(state,action)=>{
            state.value.splice(action.payload, 1)
        }
    }
})
export const {addFav,removeAllFav,removeFromFav} = favSlice.actions
export default favSlice.reducer