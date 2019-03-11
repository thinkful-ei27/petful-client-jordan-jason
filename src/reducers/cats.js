import * as actions from '../actions/cat';
console.log(actions)

const initialState = {
  catToAdopt: null,
  error: null,
  loading: false,
  showInfo: false
}

export default function catReducer(state = initialState, action) {
  if (action.type === actions.FETCH_CAT) {
    console.log('fetch')
    return Object.assign({}, state, {
      catToAdopt: action.cat
    })
  }
  // if (action.type === actions.TOGGLE_INFO) {
  //   console.log('reducer ran')
  //   return Object.assign({}, state, {
  //     showInfo: !state.showInfo
  //   })
  // }
  return state;
}