import { GET_WALLET_INFO_LOADING, GET_WALLET_INFO } from '../actions/types';

const initialState = {
    loading: false,
    getWalletInfo: null    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_WALLET_INFO_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_WALLET_INFO:
            return {
                ...state,
                getWalletInfo: action.payload,
                loading: false
            }        
        default:
            return state;
    }
}