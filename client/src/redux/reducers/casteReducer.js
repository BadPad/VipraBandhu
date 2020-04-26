import { GET_CASTE } from '../actions/types';

const initialState = {
    getCaste: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CASTE:
            return {
                ...state,
                getCaste: action.payload
            }
        default:
            return state;
    }
}
 