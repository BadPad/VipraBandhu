import { REGISTER_NEW_LOADING, REGISTER_NEW_USER } from './types';

/*--- Register New User ---*/
export const registerNewUser = newUsew => dispatch => {
    dispatch(registerNewLoading())
    dispatch({
        type: REGISTER_NEW_USER,
        payload: newUsew
    })
}

/*--- Register New Loading */
export const registerNewLoading = () => {
    return {
        type: REGISTER_NEW_LOADING
    }
}