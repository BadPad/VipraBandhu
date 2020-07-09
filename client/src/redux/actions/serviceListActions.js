import axios from 'axios';
import { SERVICES_LIST_LOADING, GET_SERVICE_LIST, SEARCH_SERVICES, FILTER_CATEGORY, SELECTED_CATEGORY, POOJA_SERVICES, HOMA_SERVICES, FUNCTION_SERVICES, CATERING_SERVICES} from './types';

/*--- Service List ---*/
export const serviceList = () => dispatch => {
    dispatch(servicesLoading())
    axios.get('https://yd5lw8j6q8.execute-api.ap-south-1.amazonaws.com/Api/vendor_services')
    .then(res => {
        const { cookServices, purohitServices } = res.data.body;
        dispatch({
            type: GET_SERVICE_LIST,
            payload: [...cookServices, ...purohitServices]
        })
    })
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

/*--- Catering Services ---*/
export const cateringServices = type => {
    return {
        type: CATERING_SERVICES,
        payload: type
    }
}

/*--- Services Loading ---*/
export const servicesLoading = () => {
    return {
        type: SERVICES_LIST_LOADING
    }
}