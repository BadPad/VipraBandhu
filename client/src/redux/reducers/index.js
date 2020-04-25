import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import authReducer from './authReducer';
import cityAreaReducer from './cityAreaReducer';
import upcomingFestReducer from './upcomingFestReducer';
import serviceListReducer from './serviceListReducer';


const persistConfig = {
    key: 'SukalpaSeva',
    storage: AsyncStorage,
    whitelist: []
}

const rootReducer = combineReducers({
    auth: authReducer,
    cityAreaList: cityAreaReducer,
    upcomingFestivals: upcomingFestReducer,
    serviceList: serviceListReducer
})

export default persistReducer(persistConfig, rootReducer);