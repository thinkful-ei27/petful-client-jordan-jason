import { combineReducers } from 'redux'
import catReducer from './cats'
import dogReducer from './dogs'

export default combineReducers({
  catReducer,
  dogReducer
})