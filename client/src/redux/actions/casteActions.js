import axios from 'axios';
import { GET_CASTES } from './types';

/*--- Get Castes ---*/
export const getCastes = () => dispatch => {
    axios.get('https://3l618blvkj.execute-api.ap-south-1.amazonaws.com/prod/caste')
    .then(res => {
        dispatch({
            type: GET_CASTES,
            payload: res.data.body
        })
    })
    .catch(err => {
        console.log(err)
    })
}

