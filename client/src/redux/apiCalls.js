import { loginFailure, loginStart, loginSuccess, logoutSuccess } from "./userRedux"
import {publicRequest, userRequest} from '../requestMethods'
import { registerFailure, registerStart, registerSuccess } from "./registerRedux";

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    }
    catch(err){
        dispatch(loginFailure());
    }
};

export const logout = (dispatch) => {
    dispatch(logoutSuccess())
};

export const register = async (dispatch,register) => {
    dispatch(registerStart());
    try{
        const res = await publicRequest.post('/auth/register',register);
        dispatch(registerSuccess(res.data));
    }
    catch(err){
        dispatch(registerFailure());
    }
};