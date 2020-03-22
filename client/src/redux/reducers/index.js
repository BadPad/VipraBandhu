import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
})

export default rootReducer;