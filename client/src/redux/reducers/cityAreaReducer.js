import { GET_AREAS } from '../actions/types';

const initialState = {
    getAreas : null

}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_AREAS:
            return {
                ...state,
                gerAreas: action.payload
            }
        default:
            return state;
    }
}
 