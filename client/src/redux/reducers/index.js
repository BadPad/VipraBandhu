import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import authReducer from './authReducer';
import serviceListReducer from './serviceListReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    serviceList: serviceListReducer
})

export default rootReducer;