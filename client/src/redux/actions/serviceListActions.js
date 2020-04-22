import axios from 'axios';
import { GET_SERVICE_LIST, SEARCH_SERVICES, FILTER_CATEGORY, SELECTED_CATEGORY, POOJA_SERVICES, HOMA_SERVICES, FUNCTION_SERVICES} from './types';

/*--- Service List ---*/
export const serviceList = () => dispatch => {
    axios.get('https://9cvp8sblj1.execute-api.ap-south-1.amazonaws.com/default/Purohit_Service_Get_Function')
    .then(res => 
        dispatch({
            type: GET_SERVICE_LIST,
            payload: res.data
        })
    )
    .catch(err => {
        console.log(err)
    })
}

/*--- Search by Service ---*/
export const searchServices = data => {
    return {
        type: SEARCH_SERVICES,
        payload: data
    }
}

/*--- Selected Category ---*/
export const selectedCategory = category => {
    return {
        type: SELECTED_CATEGORY,
        payload: category
    }
}

/*--- Filter Category ---*/
export const filterCategory = category => {
    return {
        type: FILTER_CATEGORY,
        payload: category
    }
}

/*--- Filter Pooja Service ---*/
export const poojaServices = type => {
    return {
        type: POOJA_SERVICES,
        payload: type
    }
}

/*--- Filter Homa Service ---*/
export const homaServices = type => {
    return {
        type: HOMA_SERVICES,
        payload: type
    }
}

/*--- Filter Function Service ---*/
export const functionServices = type => {
    return {
        type: FUNCTION_SERVICES,
        payload: type
    }
}