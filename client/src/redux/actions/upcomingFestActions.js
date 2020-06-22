import axios from 'axios';
import { UPCOMING_FESTIVALS_LOADING, UPCOMING_FESTIVALS } from './types';

// Get Upcoming Festivals
export const upcomingFestivals = () => dispatch => {
    dispatch(upcomingFestivalsLoading())
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

// Upcoming Festivals Loading
export const upcomingFestivalsLoading = () => {
    return {
        type: UPCOMING_FESTIVALS_LOADING
    }
}