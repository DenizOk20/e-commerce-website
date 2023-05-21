import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users:  [],
        currentUser : null,
        isFetching: false,
        error: false,
    },
    reducers:{
        loginStart: (state) => {
            state.isFetching=true;
        },
        loginSuccess: (state,action) => {
            state.isFetching= false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching= false;
            state.error = true;
        },
        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
          },
          getUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
          //DELETE
          deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.splice(
              state.users.findIndex((item) => item._id === action.payload),
              1
            );
          },
          deleteUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
          //UPDATE
          updateUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          updateUserSuccess: (state, action) => {
            state.isFetching = false;
            state.products[
              state.products.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.product;
          },
          updateUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
          //ADD
          addUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          addUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.push(action.payload);
          },
          addUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },
    },
})

export const {loginStart,loginSuccess,loginFailure,getUserStart,getUserSuccess,getUserFailure,
updateUserStart,updateUserSuccess,updateUserFailure,addUserStart,addUserSuccess,addUserFailure,
deleteUserStart,deleteUserSuccess,deleteUserFailure} =  userSlice.actions
export default userSlice.reducer