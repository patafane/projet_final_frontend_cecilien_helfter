import { createSlice } from "@reduxjs/toolkit";
import bikes from "./bikes.json"
import categories from "./categories.json"
let bikeSlice = createSlice({
    name: "bikes",
    initialState:{
        value: bikes,
        random:[],
        categories: categories,

    },
    reducers:{
        fillRandom:(state)=>{
            for(let i =0;i<5;i++){
                let randomNum = Math.floor(Math.random()*state.value.length)
                state.random.push(state.value[randomNum])
            }
            console.log(state.random);
        }
    }
})
export const {fillRandom} = bikeSlice.actions
export default bikeSlice.reducer