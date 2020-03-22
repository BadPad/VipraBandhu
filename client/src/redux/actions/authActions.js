import { usersList } from '../staticData';
import { SET_CURRENT_USER } from '../actions/types';

// Login - Get User Token
export const loginUser = userData => dispatch => {
    const data = usersList.find(data => data.email === userData.emailOrPhone);
    dispatch(setCurrentUser(data.id))
}

// Set logged in user
export const setCurrentUser = token => dispatch => {
    const data = usersList.find(data => data.id === token);
    dispatch({
        type: SET_CURRENT_USER,
        payload: data
    })
}