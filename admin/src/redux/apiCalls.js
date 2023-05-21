import { addUserFailure, addUserStart, addUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, getUserFailure, getUserStart, getUserSuccess, loginFailure, loginStart, loginSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./userRedux"
import {publicRequest, userRequest} from '../requestMethods'
import { addProductFailure, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";

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

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data));
    }
    catch(err){
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id,dispatch) => {
    dispatch(deleteProductStart());
    try{
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    }
    catch(err){
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async (id,product,dispatch) => {
    dispatch(updateProductStart());
    try{
        //update
        dispatch(updateProductSuccess({id,product}));
    }
    catch(err){
        dispatch(updateProductFailure());
    }
};

export const addProduct = async (product,dispatch) => {
    dispatch(addProductSuccess());
    try{
        const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    }
    catch(err){
        dispatch(addProductFailure());
    }
};

export const getUsers = async (dispatch) => {
    dispatch(getUserStart());
    try{
        const res = await userRequest.get('/users');
        dispatch(getUserSuccess(res.data));
    }
    catch(err){
        dispatch(getUserFailure());
    }
};

export const updateUser = async (dispatch) => {
    dispatch(updateUserStart());
    try{
        const res = await publicRequest.get('/users');
        dispatch(updateUserSuccess(res.data));
    }
    catch(err){
        dispatch(updateUserFailure());
    }
};

export const deleteUser = async (dispatch) => {
    dispatch(deleteUserStart());
    try{
        const res = await publicRequest.delete('/users');
        dispatch(deleteUserSuccess(res.data));
    }
    catch(err){
        dispatch(deleteUserFailure());
    }
};

export const addUser = async (dispatch) => {
    dispatch(addUserStart());
    try{
        const res = await publicRequest.post('/users');
        dispatch(addUserSuccess(res.data));
    }
    catch(err){
        dispatch(addUserFailure());
    }
};