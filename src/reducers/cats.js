import * as actions from '../actions/cat';

const initialState = {
  catToAdopt: null,
  error: null,
  loading: false
}

export default function catReducer(state = initialState, action) {
  console.log(action);
  if (action.type === actions.FETCH_CAT) {
    return Object.assign({}, state, {
      catToAdopt: action.cat
    })
  }
  return state;
}