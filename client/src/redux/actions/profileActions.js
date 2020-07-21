import axios from 'axios';
import { setCustomerUser, setPurohitUser, setCookUser, regLogLoading } from '../actions/authActions';
import { SET_CURRENT_USER_PROFILE } from './types';
import { showMessage } from "react-native-flash-message";

let headers = axios.defaults.headers.common;
    headers["Content-Type"] = "multipart/form-data";

// Update Customer
export const updateCustomer = (profile, navigation) => dispatch => {
    // console.log(profile)
    dispatch(regLogLoading())
    axios.post('https://deabtoskqj.execute-api.ap-south-1.amazonaws.com/prod/customer', profile)
    .then(res => {
        // console.log(res)
        showMessage({
            message: 'Profile Updated Successfully',
            type: 'success'
        })
        dispatch(setCustomerUser());
        navigation.navigate('MyProfile');
    })
    .catch(err => {
        console.log(err)
    })
}

// Update Purohit
export const updatePurohit = (profile, navigation) => dispatch => {
    // console.log(profile)
    dispatch(regLogLoading())
    axios.post('https://deabtoskqj.execute-api.ap-south-1.amazonaws.com/prod/purohit', profile)
    .then(res => {
        // console.log(res)
        showMessage({
            message: 'Profile Updated Successfully',
            type: 'success'
        })
        dispatch(setPurohitUser());
        navigation.navigate('MyProfile');
    })
    .catch(err => {
        console.log(err)
    })
}

// Update Cook
export const updateCook = (profile, navigation) => dispatch => {
    // console.log(profile)
    dispatch(regLogLoading())
    axios.post('https://deabtoskqj.execute-api.ap-south-1.amazonaws.com/prod/cook', profile)
    .then(res => {
        // console.log(res)
        showMessage({
            message: 'Profile Updated Successfully',
            type: 'success'
        })
        dispatch(setCookUser());
        navigation.navigate('MyProfile');
    })
    .catch(err => {
        console.log(err)
    })
}

// Customer Profile Change
export const customerUpdateImage = imageFile => dispatch => {
    dispatch(regLogLoading())

    axios.post('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/customer_profile_image', imageFile, headers)
        .then(res => {
            console.log(res)
            dispatch({
                type: SET_CURRENT_USER_PROFILE,
                payload: res && res.data && res.data.body
            })
            showMessage({
                message: 'Profile Image Uploaded Successfully',
                type: 'success'
            })
        })
        .catch(err => {
            console.log(err && err.response)
        })
}

// Purohith Profile Change
export const purohitUpdateImage = imageFile => dispatch => {
    dispatch(regLogLoading())

    axios.post('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/purohit_profile_image', imageFile, headers)
        .then(res => {
            console.log(res)
            dispatch({
                type: SET_CURRENT_USER_PROFILE,
                payload: res && res.data && res.data.body
            })
            showMessage({
                message: 'Profile Image Uploaded Successfully',
                type: 'success'
            })
        })
        .catch(err => {
            console.log(err && err.response)
        })
}

// Cook Profile Change
export const cookUpdateImage = imageFile => dispatch => {
    dispatch(regLogLoading())

    axios.post('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/cook_profile_image', imageFile, headers)
        .then(res => {
            console.log(res)
            dispatch({
                type: SET_CURRENT_USER_PROFILE,
                payload: res && res.data && res.data.body
            })
            showMessage({
                message: 'Profile Image Uploaded Successfully',
                type: 'success'
            })
        })
        .catch(err => {
            console.log(err && err.response)
        })
}