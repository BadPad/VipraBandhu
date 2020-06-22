import axios from 'axios';
import { SERVICES_LIST_LOADING, GET_SERVICE_LIST, SEARCH_SERVICES, FILTER_CATEGORY, SELECTED_CATEGORY, POOJA_SERVICES, HOMA_SERVICES, FUNCTION_SERVICES,
    BREAKFAST_SERVICES, LUNCH_SERVICES, SNACKS_SERVICES, DINNER_SERVICES} from './types';

/*--- Service List ---*/
export const serviceList = () => dispatch => {
    dispatch(servicesLoading())
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


/*--- Filter Breakfast Service ---*/
export const breakfastServices = type => {
    return {
        type: BREAKFAST_SERVICES,
        payload: type
    }
}

/*--- Filter Lunch Service ---*/
export const lunchServices = type => {
    return {
        type: LUNCH_SERVICES,
        payload: type
    }
}

/*--- Filter Snacks Service ---*/
export const snacksServices = type => {
    return {
        type: SNACKS_SERVICES,
        payload: type
    }
}

/*--- Filter Dinner Service ---*/
export const dinnerServices = type => {
    return {
        type: DINNER_SERVICES,
        payload: type
    }
}

/*--- Services Loading ---*/
export const servicesLoading = () => {
    return {
        type: SERVICES_LIST_LOADING
    }
}