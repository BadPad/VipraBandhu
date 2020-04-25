import axios from 'axios';
import { GET_AREAS } from './types'
/* Get Area */

export const getAreas = city => dispatch => {
    axios.get(`https://rile50571i.execute-api.ap-south-1.amazonaws.com/Prod/area?District=${city}`)
    .then(res => 
        dispatch({
            type: GET_AREAS,
            payload: res.data.body
        })
    )
    .catch(err => {
        console.log(err)
    })

}