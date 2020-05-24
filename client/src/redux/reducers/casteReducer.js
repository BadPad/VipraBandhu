import { GET_CASTES } from '../actions/types';

const initialState = {
    getCasteList: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CASTES:
            return {
                ...state,
                getCasteList: action.payload.reverse()
            }
        default:
            return state;
    }
}
 