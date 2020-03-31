import axios from 'axios';
import isEmpty from '../../components/Reusable_Component/is-empty';
import { usersList } from '../staticData';
import { SET_CURRENT_USER } from '../actions/types';
import { AsyncStorage } from 'react-native';

/*--- Register User ---*/
export const registeruser = userData => dispatch => {
    axios.post('https://i9swse9hdd.execute-api.ap-south-1.amazonaws.com/prod/customer', userData)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

// Login - Get User Token
export const loginUser = userData => dispatch => {
    const data = usersList.find(data => data.email === userData.emailOrPhone);
    AsyncStorage.setItem('SukalpaSeva', data.id.toString())
    dispatch(setCurrentUser(data.id))
}

// Set logged in user
export const setCurrentUser = token => dispatch => {
    if(isEmpty(token) === true) {
        dispatch({
            type: SET_CURRENT_USER,
            payload: token
        })
    }
    const data = usersList.find(data => data.id === token);
    dispatch({
        type: SET_CURRENT_USER,
        payload: data
    })
}

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from the localstorage
    AsyncStorage.removeItem('SukalpaSeva');
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
}