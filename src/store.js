import { createStore, applyMiddleware } from 'redux';
import think from 'redux-thunk';

import { catReducer } from './reducers/cats';
export default createStore(catReducer, applyMiddleware(thunk));