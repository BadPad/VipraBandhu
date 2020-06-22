import { UPCOMING_FESTIVALS_LOADING, UPCOMING_FESTIVALS } from '../actions/types';

const initialState = {
    loading: false,
    upcomingFunctionsList: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPCOMING_FESTIVALS_LOADING:
            return {
                ...state,
                loading: true
            }
        case UPCOMING_FESTIVALS:
            return {
                ...state,
                upcomingFunctionsList: action.payload, 
                loading: false               
            }
        default:
            return state;
    }
}