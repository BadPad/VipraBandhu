import axios from 'axios';
import { setCustomerUser, setPurohitUser, setCookUser, regLogLoading } from '../actions/authActions';
import { showMessage } from "react-native-flash-message";

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