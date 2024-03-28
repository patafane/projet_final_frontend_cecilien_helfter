import { createSlice } from "@reduxjs/toolkit";
let randomCarrouSlice = createSlice({
    name:"randomCarrou",
    initialState:{
        value:[],
        random:[]
    },
    reducers:{
        fillValue:(state,action)=>{
            state.value = action.payload
            state.value = state.value.filter(element=>element.title.includes("Drive")===false && element.title.includes("212")===false && element.title.includes("New") === false)
        },
        fillRandom:(state)=>{
            for(let i =0;i<5;i++){
                let randomNum = Math.floor(Math.random()*state.value.length)
                state.random.push(state.value[randomNum])
            }
            console.log(state.random);
        }
    }
})
export const {fillValue,fillRandom} = randomCarrouSlice.actions
export default randomCarrouSlice.reducer