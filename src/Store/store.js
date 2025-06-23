import { applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer } from './Auth/Reducer';
import { legacy_createStore } from 'redux';
import { twitReducer } from './Twit/Reducer';

const rootReducers = combineReducers({

    auth: authReducer,
    twit: twitReducer


});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));