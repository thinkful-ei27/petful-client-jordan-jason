const initialState = {
  catToAdopt : {},
  }

export const catReducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_CAT){
    return Object.assign({}, state, {
      catToAdopt: actions.cat
    })
  }
}