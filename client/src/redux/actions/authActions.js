import axios from 'axios';
import { SET_AUTH_LOADING, SET_CURRENT_USER_TYPE, SET_CURRENT_USER, SET_AUTH_FALSE_LOADING } from '../actions/types';
import { AsyncStorage } from 'react-native';
import setAuthToken from '../../components/Reusable_Component/setAuthToken';
import { showMessage } from "react-native-flash-message";

/*--- Register & login Customer ---*/
export const regLogCustomer = (userData, from, navigation) => dispatch => {
    // console.log(userData)
    dispatch(regLogLoading());
    axios.post('https://ljuw2br52c.execute-api.ap-south-1.amazonaws.com/prod/register', userData)
    .then(res => {
        // console.log(res)
        const { id_token, status } = res && res.data;
        const sukalpaSevaToken = {
            ss_auth : id_token,
            ss_user : 'customer'
        }
        if(from === 'register') {
            if(status === 201) {
                // console.log(sukalpaSevaToken)
                showMessage({
                    message: `${userData.FirstName} you Registered Successfully as Customer`,
                    type: 'success'
                })
                AsyncStorage.setItem('SukalpaSeva', JSON.stringify(sukalpaSevaToken));
                setAuthToken(id_token)
                dispatch(setCurrentUserType('customer'))
                dispatch(setCustomerUser(from, navigation))
            } else if(status === 200 || status === 401) {
                // console.log('user already registered')
                dispatch(regLogStopLoading());
                showMessage({
                    message: 'Mobile Number already Registered as Customer',
                    type: 'danger'
                })
                navigation.navigate('Login')
            }
        } else if(from === 'login') {
            if(status === 200) {
                // console.log(sukalpaSevaToken)
                AsyncStorage.setItem('SukalpaSeva', JSON.stringify(sukalpaSevaToken));
                setAuthToken(id_token)
                dispatch(setCurrentUserType('customer'))
                dispatch(setCustomerUser(from, navigation))
                showMessage({
                    message: 'Login Successfully as Customer',
                    type: 'success'
                })
            } else if(status === 401) {
                // console.log('The username or password is incorrect')
                dispatch(regLogStopLoading());
                showMessage({
                    message: 'Mobile Number or password is incorrect',
                    type: 'danger'
                })
            } else if(status === 404) {
                // console.log('Username does not exists')
                dispatch(regLogStopLoading());
                showMessage({
                    message: 'Mobile Number does not exists please register',
                    type: 'danger'
                })
                navigation.navigate('Register')
            }
        }
    })
    .catch(err => {
        console.log(err && err.response)
    })
}

/*--- Register & login Purohit ---*/
export const regLogPurohit = (userData, from, navigation) => dispatch => {
    // console.log(userData)
    dispatch(regLogLoading());
    axios.post('https://mb5u8yz9e7.execute-api.ap-south-1.amazonaws.com/prod/purohit-register', userData)
    .then(res => {
        // console.log(res)
        const { id_token, status } = res && res.data;
        const sukalpaSevaToken = {
            ss_auth : id_token,
            ss_user : 'purohit'
        }
        if(from === 'register') {
            if(status === 201) {
                // console.log(sukalpaSevaToken)
                showMessage({
                    message: `${userData.FirstName} you Registered Successfully as Purohit`,
                    type: 'success'
                })
                AsyncStorage.setItem('SukalpaSeva', JSON.stringify(sukalpaSevaToken));
                setAuthToken(id_token)
                dispatch(setCurrentUserType('purohit'))
                dispatch(setPurohitUser(from, navigation))
            } else if(status === 200 || status === 401) {
                // console.log('user already registered')
                dispatch(regLogStopLoading());
                showMessage({
                    message: 'Mobile Number already Registered as Purohit',
                    type: 'danger'
                })
                navigation.navigate('Login')
            }
        } else if(from === 'login') {
            if(status === 200) {
                // console.log(sukalpaSevaToken)
                AsyncStorage.setItem('SukalpaSeva', JSON.stringify(sukalpaSevaToken));
                setAuthToken(id_token)
                dispatch(setCurrentUserType('purohit'))
                dispatch(setPurohitUser(from, navigation))
                showMessage({
                    message: 'Login Successfully as Purohit',
                    type: 'success'
                })
            } else if(status === 401) {
                // console.log('The username or password is incorrect')
                dispatch(regLogStopLoading());
                showMessage({
                    message: 'Mobile Number or password is incorrect',
                    type: 'danger'
                })
            } else if(status === 404) {
                // console.log('Username does not exists')
                dispatch(regLogStopLoading());
                showMessage({
                    message: 'Mobile Number does not exists please register',
                    type: 'danger'
                })
                navigation.navigate('Register')
            }
        }
    })
    .catch(err => {
        console.log(err && err.response)
    })
}

/*--- Register & login Cook ---*/
export const regLogCook = (userData, from, navigation) => dispatch => {
    // console.log(userData)
    dispatch(regLogLoading());
    axios.post('https://azcbpg0u4m.execute-api.ap-south-1.amazonaws.com/prod/cook-register', userData)
    .then(res => {
        // console.log(res)
        const { id_token, status } = res && res.data;
        const sukalpaSevaToken = {
            ss_auth : id_token,
            ss_user : 'cook'
        }
        if(from === 'register') {
            if(status === 201) {
                // console.log(sukalpaSevaToken)
                showMessage({
                    message: `${userData.FirstName} you registered Successfully as Cook`,
                    type: 'success'
                })
                AsyncStorage.setItem('SukalpaSeva', JSON.stringify(sukalpaSevaToken));
                setAuthToken(id_token)
                dispatch(setCurrentUserType('cook'))
                dispatch(setCookUser(from, navigation))
            } else if(status === 200 || status === 401) {
                // console.log('user already registered')
                dispatch(regLogStopLoading());
                showMessage({
                    message: 'Mobile Number already registered as Cook',
                    type: 'danger'
                })
                navigation.navigate('Login')
            }
        } else if(from === 'login') {
            if(status === 200) {
                // console.log(sukalpaSevaToken)
                AsyncStorage.setItem('SukalpaSeva', JSON.stringify(sukalpaSevaToken));
                setAuthToken(id_token)
                dispatch(setCurrentUserType('cook'))
                dispatch(setCookUser(from, navigation))
                showMessage({
                    message: 'Login Successfully as Cook',
                    type: 'success'
                })
            } else if(status === 401) {
                // console.log('The username or password is incorrect')
                dispatch(regLogStopLoading());
                showMessage({
                    message: 'Mobile Number or password is incorrect',
                    type: 'danger'
                })
            } else if(status === 404) {
                // console.log('Username does not exists')
                dispatch(regLogStopLoading());
                showMessage({
                    message: 'Mobile Number does not exists please register',
                    type: 'danger'
                })
                navigation.navigate('Register')
            }
        }
    })
    .catch(err => {
        console.log(err && err.response)
    })
}

/*--- Set logged in Customer user ---*/
function getCustomerUser () {
    return axios.get('https://bfmlogqcg3.execute-api.ap-south-1.amazonaws.com/prod/user-info')
}

function getCustomerImageUser() {
    return axios.get('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/customer_profile_image')
}

export const setCustomerUser = (from, navigation) => dispatch => {
    axios.all([getCustomerUser(), getCustomerImageUser()])
    .then(axios.spread((user, image) => {
        const newCustomerProfile = {...user.data.body[0], profileImage: image.data.body};
        dispatch({
            type: SET_CURRENT_USER,
            payload: newCustomerProfile
        })
        if(from === 'register' || from === 'login') {
            navigation.navigate('Welcome')
        }
    }))
    .catch(err => {
        console.log(err && err.response)
    })
}

/*--- Set logged in Purohit user ---*/
function getPurohitUser() {
    return axios.get('https://2k7weprcb7.execute-api.ap-south-1.amazonaws.com/prod/purohit-info')
}

function getPurohitImageUser() {
    return axios.get('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/purohit_profile_image')
}

export const setPurohitUser = (from, navigation) => dispatch => {
    axios.all([getPurohitUser(), getPurohitImageUser()])
    .then(axios.spread((user, image) => {
        const newPurohitProfile = {...user.data.body[0], profileImage: image.data.body};
        dispatch({
            type: SET_CURRENT_USER,
            payload: newPurohitProfile
        })
        if(from === 'register' || from === 'login') {
            navigation.navigate('Welcome')
        }
    }))
    .catch(err => {
        console.log(err && err.response)
    })
}

/*--- Set logged in Cook user ---*/
function getCookUser() {
    return axios.get('https://3wsdjr44tl.execute-api.ap-south-1.amazonaws.com/prod/cook-info')
}

function getCookImageUser() {
    return axios.get('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/cook_profile_image')
}
export const setCookUser = (from, navigation) => dispatch => {
    axios.all([getCookUser(), getCookImageUser()])
    .then(axios.spread((user, image) => {
        const newCookProfile = {...user.data.body[0], profileImage: image.data.body};
        dispatch({
            type: SET_CURRENT_USER,
            payload: newCookProfile
        })
        if(from === 'register' || from === 'login') {
            navigation.navigate('Welcome')
        }
    }))
    .catch(err => {
        console.log(err && err.response)
    })
}

/*--- Set Current User Type ---*/
export const setCurrentUserType = user => {
    return {
        type: SET_CURRENT_USER_TYPE,
        payload: user
    }
}

/*--- Log user out ---*/
export const logoutUser = navigation => dispatch => {
    // Remove token from the localstorage
    AsyncStorage.removeItem('SukalpaSeva');

    // Remove auth headers from future requests
    setAuthToken(false);

    // Set current user to {} which will set isAuthenticated to false
    // dispatch(setCurrentUser({}));
    dispatch(regLogLoading());
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })
    navigation.navigate('Login')
}

/*--- Register Login Loading ---*/
export const regLogLoading = () => {
    return {
        type: SET_AUTH_LOADING
    }
}

/*--- Registert Log Stop Loading ---*/
export const regLogStopLoading = () => {
    return {
        type: SET_AUTH_FALSE_LOADING
    }
}