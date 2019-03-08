import { API_BASE_URL } from '../../config'


export const FETCH_CAT = 'FETCH_CAT';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT,
  cat
})
export const fetchCat = () => (dispatch) => {
  return fetch(`${API_BASE_URL}/cats`, {
    method: 'GET',
    header: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(cat => dispatch(fetchCatSuccess(cat)))
    .catch(err => {
      return new Error(err);
    })
}