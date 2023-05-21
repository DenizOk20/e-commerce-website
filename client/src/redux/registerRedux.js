import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "register",
    initialState: {
        users : [],
        isFetching: false,
        error: false,
    },
    reducers:{
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

export const {registerStart,registerSuccess,registerFailure} =  registerSlice.actions
export default registerSlice.reducer