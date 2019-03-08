import { API_BASE_URL } from '../config'

export const FETCH_CAT = 'FETCH_CAT';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT,
  cat
})
export const fetchCat = () => dispatch => {
  console.log('fetchCat ran')
  return fetch(`${API_BASE_URL}/cats`, {
    method: 'GET',
    header: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      console.log('returning res.json')
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cat => {
      console.log('dispatched catsuccess with', cat)
      dispatch(fetchCatSuccess(cat))
    })
    .catch(err => {
      return new Error(err);
    })
}

export const DELETE_CAT = 'DELETE_CAT';
export const deleteCat = () => dispatch => {
  return fetch(`${API_BASE_URL}/cats`, {
    method: 'DELETE',
    header: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(() => dispatch(fetchCat()))
    .catch(err => {
      return new Error(err);
    })
}