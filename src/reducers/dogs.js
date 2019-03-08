import {
  FETCH_DOG,
  DELETE_DOG
} from '../actions/dog';

const initialState = {
  dogToAdopt: {},
}

export const dogReducer = (state = initialState, action) => {
  if (action.type === FETCH_DOG) {
    return Object.assign({}, state, {
      dogToAdopt: action.dog
    })
  }
}