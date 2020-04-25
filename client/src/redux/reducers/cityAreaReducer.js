import { GET_DISTRICT_OR_CITY, GET_AREAS } from '../actions/types';

const initialState = {
    getDistricrOrCity: null,
    getAreasList : null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DISTRICT_OR_CITY:
            return {
                ...state,
                getDistricrOrCity: action.payload
            }
        case GET_AREAS:
            return {
                ...state,
                getAreasList: action.payload
            }
        default:
            return state;
    }
}
 