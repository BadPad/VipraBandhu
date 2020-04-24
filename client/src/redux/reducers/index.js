import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import authReducer from './authReducer';
import serviceListReducer from './serviceListReducer';
import upcomingFestReducer from './upcomingFestReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    serviceList: serviceListReducer,
    upcomingFestivals: upcomingFestReducer
})

export default rootReducer;