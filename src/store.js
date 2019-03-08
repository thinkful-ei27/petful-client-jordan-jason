import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { catReducer } from './reducers/cats';
import { dogReducer } from './reducers/dogs';
const rootReducer = combineReducers(catReducer, dogReducer)
export default createStore(rootReducer, applyMiddleware(thunk));