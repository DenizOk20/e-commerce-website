import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser : null,
        isFetching: false,
        error: false,
    },
    reducers:{
        loginStart: (state) => {
            state.isFetching=true;
            state.error = false;
        },
        loginSuccess: (state,action) => {
            state.isFetching= false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching= false;
            state.error = true;
        },

        logoutSuccess: (state) => {
            state.currentUser = null;
        },
        registerStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.users.push(action.payload);
          },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
    },
})

export const {loginStart,loginSuccess,loginFailure,logoutSuccess,registerStart,registerSuccess,registerFailure} =  userSlice.actions
export default userSlice.reducer