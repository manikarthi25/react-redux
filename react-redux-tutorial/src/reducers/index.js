import isLoggedReducer from './isLogged';
import counterReducer from './counter';
import { combineReducers } from 'redux';

const store = combineReducers({
    login : isLoggedReducer,
    counter : counterReducer
});

export default store;