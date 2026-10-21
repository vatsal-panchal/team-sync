import { createSlice } from "@reduxjs/toolkit";

const authsSlice = createSlice({
    name:"auth",


    initialState:{
        employee:null,
        isLoading:false
    },

    reducers:{
        addEmployee:(state,action) =>{
            state.employee = action.payload,
            state.isLoading = false
        },

        removeEmployee:(state) =>{
            state.employee = null,
            state.isLoading = false
        }
    }
})


export const {addEmployee,removeEmployee} = authsSlice.actions

export default authsSlice.reducer