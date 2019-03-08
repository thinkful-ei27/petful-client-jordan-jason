import {
  FETCH_CAT,
  DELETE_CAT
} from '../actions/cat';

const initialState = {
  catToAdopt: {},
}

export const catReducer = (state = initialState, action) => {
  if (action.type === FETCH_CAT) {
    return Object.assign({}, state, {
      catToAdopt: action.cat
    })
  }
}