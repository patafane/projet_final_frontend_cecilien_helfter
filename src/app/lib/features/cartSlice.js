import { createSlice } from "@reduxjs/toolkit";
let cartSlice = createSlice({
    name:"cart",
    initialState:{
        value:[],
        active: false
    },
    reducers:{
        addCart: (state, action) => {
            const existingItem = state.value.find((item) => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantite += 1;
                console.log(`${action.payload.name} est déjà dans le panier.`);
            } else {
                state.value.push({ ...action.payload, quantite: 1 })
            }
            console.log(state.value);
        },
        removeCart: (state, action) => {
            const itemToRemove = state.value[action.payload]
            if (itemToRemove.quantite > 1) {
                itemToRemove.quantite -= 1
            } else {
                state.value.splice(action.payload, 1)
            }
        },
        augmenteQuantite : (state,action)=>{
            state.value[action.payload].quantite = state.value[action.payload].quantite +1
        },
        removeAll:(state,action)=>{
            state.value.splice(action.payload,1)
        },
        setActiveTrue:(state)=>{
            state.active = true
        },
        setActiveFalse:(state)=>{
            state.active = false
        },
        deconect:(state)=>{
            for(let i = state.value.length;i>0;i--){
                state.value.pop()
            }
        }
    }
})
export const {addCart,removeCart,augmenteQuantite,removeAll,setActiveFalse,setActiveTrue,deconect} = cartSlice.actions
export default cartSlice.reducer