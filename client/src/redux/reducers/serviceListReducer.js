import { GET_SERVICE_LIST, POOJA_SERVICES, HOMA_SERVICES, FUNCTION_SERVICES, SEARCH_SERVICES} from '../actions/types';

const initialState = {
    fullServiceList: null,
    filteredList: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SERVICE_LIST:
            return {
                ...state,
                fullServiceList: action.payload
            }
        case POOJA_SERVICES:
            const { fullServiceList } = state;
            let filteredPooja;
            if(action.payload === 'searchPooja') {
                filteredPooja = fullServiceList.filter(list => list.serviceSubCategory === 'pooja')
            }
            return {
                ...state,
                filteredList: filteredPooja
            }
        case HOMA_SERVICES:
            const services = state.fullServiceList;
            let filteredHoma;
            if(action.payload === 'searchHoma') {
                filteredHoma = services.filter(list => list.serviceSubCategory === 'homa')
            }
            return {
                ...state,
                filteredList: filteredHoma
            }
        case FUNCTION_SERVICES:
            const fullServices = state.fullServiceList;
            let filterFunction;
            if(action.payload === 'searchFunction') {
                filterFunction = fullServices.filter(list => list.serviceSubCategory === 'function')
            }
            return {
                ...state,
                filteredList: filterFunction
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
        default:
            return state;
    }
}