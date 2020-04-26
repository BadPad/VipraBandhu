import axios from 'axios';
import { GET_CASTE } from './types';

/*--- Get Caste ---*/
export const getCaste = () => dispatch => {
    axios.get('https://3l618blvkj.execute-api.ap-south-1.amazonaws.com/prod/caste')
    .then(res => 
        dispatch({
            type: GET_CASTE,
            payload: res.data.body
        })
    )
    .catch(err => {
        console.log(err)
    })

}

