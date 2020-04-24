import { UPCOMING_FESTIVALS } from '../actions/types';

const initialState = {
    upcomingFunctionsList: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPCOMING_FESTIVALS:
            return {
                ...state,
                upcomingFunctionsList: action.payload,                
            }
        default:
            return state;
    }
}