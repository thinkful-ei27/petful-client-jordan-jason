import { combineReducers } from 'redux'
import catReducer from './cats'
import dogReducer from './dogs'

const rootReducer = combineReducers({
  catReducer: catReducer,
  dogReducer: dogReducer
})
export default rootReducer;