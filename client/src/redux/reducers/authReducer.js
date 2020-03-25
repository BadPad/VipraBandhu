import isEmpty from '../../components/Reusable_Component/is-empty';
import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: isEmpty(action.payload) === true ? false : !isEmpty(action.payload),
                user: isEmpty(action.payload) === true ? {} : action.payload
            }
        default:
            return state;
    }
}