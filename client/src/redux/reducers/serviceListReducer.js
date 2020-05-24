import { GET_SERVICE_LIST, SEARCH_SERVICES, SELECTED_CATEGORY, FILTER_CATEGORY, POOJA_SERVICES, HOMA_SERVICES, FUNCTION_SERVICES
, BREAKFAST_SERVICES, LUNCH_SERVICES, SNACKS_SERVICES, DINNER_SERVICES} from '../actions/types';

const initialState = {
    fullServiceList: null,
    filteredList: [],
    filterCategory: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SERVICE_LIST:
            return {
                ...state,
                fullServiceList: action.payload
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
        case BREAKFAST_SERVICES:
            const fullServices1 = state.fullServiceList;
            const breakfast = action.payload;
            const filteredBreakfast = fullServices1.filter(list => list.serviceSubCategory === breakfast)
            return {
                ...state,
                filteredList: filteredBreakfast,
                filterCategory: breakfast
            }
        case LUNCH_SERVICES:
            const fullServices2 = state.fullServiceList;
            const lunch = action.payload;
            const filteredLunch = fullServices2.filter(list => list.serviceSubCategory === lunch)
            return {
                ...state,
                filteredList: filteredLunch,
                filterCategory: lunch
            }
        case SNACKS_SERVICES:
            const fullServices3 = state.fullServiceList;
            const snacks = action.payload;
            const filterSnacks = fullServices3.filter(list => list.serviceSubCategory === snacks)
            return {
                ...state,
                filteredList: filterSnacks,
                filterCategory: snacks
            }
        case DINNER_SERVICES:
            const fullServices4 = state.fullServiceList;
            const dinner = action.payload;
            const filterDinner = fullServices4.filter(list => list.serviceSubCategory === dinner)
            return {
                ...state,
                filteredList: filterDinner,
                filterCategory: dinner
            }
            
        default:
            return state;
    }
}