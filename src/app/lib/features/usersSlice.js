import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
    name:"users",
    initialState:{
        value:[
            {
                username: "test",
                password: "1234",
            },
            {
                username: "molengeek",
                password: "test"
            }
        ],
    },
    reducers:{
        addUser:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})
export const {addUser} = usersSlice.actions
export default usersSlice.reducer