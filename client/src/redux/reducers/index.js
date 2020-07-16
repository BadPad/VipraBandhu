import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import authReducer from './authReducer';
import registerReducer from './registerReducer';
import cityAreaReducer from './cityAreaReducer';
import upcomingFestReducer from './upcomingFestReducer';
import casteListReducer from './casteReducer';
import serviceListReducer from './serviceListReducer';
import bookingCartReducer from './bookingCartReducer';
import myBookingsOrdersReducer from './myBookingsOrdersReducer';

const persistConfig = {
    key: 'SukalpaSeva',
    storage: AsyncStorage,
    whitelist: ['bookingCartServices']
}

const rootReducer = combineReducers({
    auth: authReducer,
    newRegister: registerReducer,
    cityAreaList: cityAreaReducer,
    upcomingFestivals: upcomingFestReducer,
    serviceList: serviceListReducer,
    casteList: casteListReducer,
    bookingCartServices: bookingCartReducer,
    myBookingsOrders: myBookingsOrdersReducer,
    getPurohitBookings: myBookingsOrdersReducer,
    getCookBookings: myBookingsOrdersReducer
})

export default persistReducer(persistConfig, rootReducer);