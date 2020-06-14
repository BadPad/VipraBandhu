import axios from 'axios';
import { SET_AUTH_LOADING, SET_CURRENT_USER } from '../actions/types';
import { AsyncStorage } from 'react-native';
import setAuthToken from '../../components/Reusable_Component/setAuthToken';

/*--- Register & login Customer ---*/
export const regLogCustomer = (userData, from, navigation) => dispatch => {
    // console.log(userData)
    dispatch(regLogLoading());
    axios.post('https://ljuw2br52c.execute-api.ap-south-1.amazonaws.com/prod/register', userData)
    .then(res => {
        // console.log(res)
        const { id_token } = res && res.data;
        const sukalpaSevaToken = {
            ss_auth : id_token,
            ss_user : 'customer'
        }
        // console.log(sukalpaSevaToken)
        AsyncStorage.setItem('SukalpaSeva', JSON.stringify(sukalpaSevaToken));
        setAuthToken(id_token)
        dispatch(setCustomerUser(from, navigation))
    })
    .catch(err => {
        console.log(err)
    })
}

/*--- Register & login Purohit ---*/
export const regLogPurohit = (userData, from, navigation) => dispatch => {
    // console.log(userData)
    dispatch(regLogLoading());
    axios.post('https://mb5u8yz9e7.execute-api.ap-south-1.amazonaws.com/prod/purohit-register', userData)
    .then(res => {
        // console.log(res)
        const { id_token } = res && res.data;
        const sukalpaSevaToken = {
            ss_auth : id_token,
            ss_user : 'purohit'
        }
        // console.log(sukalpaSevaToken)
        AsyncStorage.setItem('SukalpaSeva', JSON.stringify(sukalpaSevaToken));
        setAuthToken(id_token)
        dispatch(setPurohitUser(from, navigation))
    })
    .catch(err => {
        console.log(err)
    })
}

/*--- Register & login Cook ---*/
export const regLogCook = (userData, from, navigation) => dispatch => {
    // console.log(userData)
    dispatch(regLogLoading());
    axios.post('https://azcbpg0u4m.execute-api.ap-south-1.amazonaws.com/prod/cook-register', userData)
    .then(res => {
        // console.log(res)
        const { id_token } = res && res.data;
        const sukalpaSevaToken = {
            ss_auth : id_token,
            ss_user : 'cook'
        }
        // console.log(sukalpaSevaToken)
        AsyncStorage.setItem('SukalpaSeva', JSON.stringify(sukalpaSevaToken));
        setAuthToken(id_token)
        dispatch(setCookUser(from, navigation))
    })
    .catch(err => {
        console.log(err)
    })
}

/*--- Set logged in Customer user ---*/
export const setCustomerUser = (from, navigation) => dispatch => {
    // console.log(from)
    axios.get('https://bfmlogqcg3.execute-api.ap-south-1.amazonaws.com/prod/user-info')
    .then(res => {
        // console.log(res)
        dispatch({
            type: SET_CURRENT_USER,
            payload: res && res.data && res.data.body[0]
        })
        if(from === 'register' || from === 'login') {
            navigation.navigate('Welcome')
        }
    })
    .catch(err => {
        console.log(err.response)
    })
}

/*--- Set logged in Purohit user ---*/
export const setPurohitUser = (from, navigation) => dispatch => {
    // console.log(from)
    axios.get('https://2k7weprcb7.execute-api.ap-south-1.amazonaws.com/prod/purohit-info')
    .then(res => {
        // console.log(res)
        dispatch({
            type: SET_CURRENT_USER,
            payload: res && res.data && res.data.body[0]
        })
        if(from === 'register' || from === 'login') {
            navigation.navigate('Welcome')
        }
    })
    .catch(err => {
        console.log(err.response)
    })
}

/*--- Set logges in Cook user ---*/
export const setCookUser = (from, navigation) => dispatch => {
    // console.log(from)
    axios.get('https://3wsdjr44tl.execute-api.ap-south-1.amazonaws.com/prod/cook-info')
    .then(res => {
        // console.log(res)
        dispatch({
            type: SET_CURRENT_USER,
            payload: res && res.data && res.data.body[0]
        })
        if(from === 'register' || from === 'login') {
            navigation.navigate('Welcome')
        }
    })
    .catch(err => {
        console.log(err.response)
    })
}

/*--- Log user out ---*/
export const logoutUser = () => dispatch => {
    // Remove token from the localstorage
    AsyncStorage.removeItem('SukalpaSeva');
    // Set current user to {} which will set isAuthenticated to false
    // dispatch(setCurrentUser({}));
    dispatch(regLogLoading());
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })
}

/*--- Register Login Loading ---*/
export const regLogLoading = () => {
    return {
        type: SET_AUTH_LOADING
    }
}