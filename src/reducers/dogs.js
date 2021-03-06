import * as actions from '../actions/dog';

const initialState = {
  dogToAdopt: null,
  error: null,
  loading: false
}

export default function dogReducer(state = initialState, action) {
  if (action.type === actions.FETCH_DOG) {
    return Object.assign({}, state, {
      dogToAdopt: action.dog
    })
  }
  return state;
}