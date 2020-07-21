import isEmpty from '../../components/Reusable_Component/is-empty';
import { SET_AUTH_LOADING, SET_CURRENT_USER_TYPE, SET_CURRENT_USER, SET_CURRENT_USER_PROFILE, SET_AUTH_FALSE_LOADING } from '../actions/types';

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: {},
    userType: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_CURRENT_USER_TYPE: 
            return {
                ...state,
                userType: action.payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
                loading: false
            }
        case SET_CURRENT_USER_PROFILE:
            const { user } = state;
            let updatedProfile = user;
            updatedProfile["profileImage"] = action.payload;
            return {
                ...state,
                user: updatedProfile,
                loading: false
            }
        case SET_AUTH_FALSE_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}