import axios from 'axios';
import { UPCOMING_FESTIVALS } from './types';

// Get Upcoming Festivals
export const upcomingFestivals = () => dispatch => {
    axios.get('https://tjmwq003ch.execute-api.ap-south-1.amazonaws.com/default/Upcoming_Festivals_Get_Function')
    .then(res => 
        dispatch({
            type: UPCOMING_FESTIVALS,
            payload: res.data.body
        })
    )
    .catch(err => {
        console.log(err)
    })
}