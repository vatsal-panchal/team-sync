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
        }
    }
})