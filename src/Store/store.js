import { applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer } from './Auth/Reducer';
import { legacy_createStore } from 'redux';

const rootReducers = combineReducers({

    auth: authReducer,


});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));