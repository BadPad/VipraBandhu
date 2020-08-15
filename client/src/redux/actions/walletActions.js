import axios from 'axios';
import { GET_WALLET_INFO_LOADING, GET_WALLET_INFO } from './types';

// Get Wallet Info
export const getWalletInfo = () => dispatch => {
    dispatch(getWalletInfoLoading());
    axios.get('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/wallet_get')
        .then(res => 
            dispatch({
                type: GET_WALLET_INFO,
                payload: res.data.body
            })    
        )
        .catch(err => console.log(err))
}

// Get Wallet Info Loading
export const getWalletInfoLoading = () => {
    return {
        type: GET_WALLET_INFO_LOADING
    }
}