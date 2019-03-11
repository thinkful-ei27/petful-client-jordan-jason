import { API_BASE_URL } from '../config'

export const FETCH_CAT = 'FETCH_CAT';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT,
  cat
})
export const fetchCat = () => dispatch => {
  console.log(API_BASE_URL);
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'GET',
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
    .then(cat => dispatch(fetchCatSuccess(cat)))
    .catch(err => {
      return new Error(err);
    })
}

export const deleteCat = () => dispatch => {
  dispatch(fetchCat());
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'DELETE',
    header: {
      'content-type': 'application/json'
    }
  })
    .then(() => dispatch(fetchCat()))
    .catch(err => {
      return new Error(err);
    })
}

export const TOGGLE_INFO = 'TOGGLE_INFO';
export const toggleInfo = () => {
  return {
    type: TOGGLE_INFO,
  };
}