import { REGISTER_NEW_LOADING, REGISTER_NEW_USER } from '../actions/types';

const initialState = {
    loading: false,
    regNewUser: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case REGISTER_NEW_LOADING: 
            return {
                ...state,
                loading: true
            }
        case REGISTER_NEW_USER: 
            return {
                ...state,
                regNewUser: action.payload,
                loading: false
            }
        default:
            return state;
    }
}