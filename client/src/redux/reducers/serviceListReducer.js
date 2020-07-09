import { SERVICES_LIST_LOADING, GET_SERVICE_LIST, SEARCH_SERVICES, SELECTED_CATEGORY, FILTER_CATEGORY, POOJA_SERVICES, HOMA_SERVICES, FUNCTION_SERVICES, CATERING_SERVICES } from '../actions/types';

const initialState = {
    loading: false,
    fullServiceList: null,
    filteredList: [],
    filterCategory: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SERVICES_LIST_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_SERVICE_LIST:
            return {
                ...state,
                fullServiceList: action.payload,
                loading: false
            }
        case SEARCH_SERVICES:
            const allServices = state.fullServiceList;
            const name = action.payload;
            let searchService;
            searchService = allServices.filter(list => list.serviceName.toLowerCase().startsWith(name.toLowerCase()));
            return {
                ...state,
                filteredList: searchService
            }
        case SELECTED_CATEGORY:
            return {
                ...state,
                filterCategory: action.payload
            }
        case FILTER_CATEGORY:
            const fullServicesList = state.fullServiceList;
            const category = action.payload;
            let filterServices;
            filterServices = fullServicesList.filter(list => list.serviceSubCategory === category);
            return {
                ...state,
                filteredList: filterServices,
                filterCategory: category
            }
        case POOJA_SERVICES:
            const { fullServiceList } = state;
            const pooja = action.payload;
            const filteredPooja = fullServiceList.filter(list => list.serviceSubCategory === pooja)
            return {
                ...state,
                filteredList: filteredPooja,
                filterCategory: pooja
            }
        case HOMA_SERVICES:
            const services = state.fullServiceList;
            const homa = action.payload;
            const filteredHoma = services.filter(list => list.serviceSubCategory === homa)
            return {
                ...state,
                filteredList: filteredHoma,
                filterCategory: homa
            }
        case FUNCTION_SERVICES:
            const fullServices = state.fullServiceList;
            const functions = action.payload;
            const filterFunction = fullServices.filter(list => list.serviceSubCategory === functions)
            return {
                ...state,
                filteredList: filterFunction,
                filterCategory: functions
            }
        case CATERING_SERVICES:
            const allService = state.fullServiceList;
            const catering = action.payload;
            const filterCatering = allService.filter(list => list.serviceCategory === catering)
            return {
                ...state,
                filteredList: filterCatering
            }
        default:
            return state;
    }
}