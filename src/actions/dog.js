import { API_BASE_URL } from '../config'


export const FETCH_DOG = 'FETCH_DOG';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG,
  dog
})
export const fetchDog = () => dispatch => {
  return fetch(`${API_BASE_URL}/dog`, {
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
    .then(dog => dispatch(fetchDogSuccess(dog)))
    .catch(err => {
      return new Error(err);
    })
}

export const DELETE_DOG = 'DELETE_DOG';
export const deleteDog = () => dispatch => {
  return fetch(`${API_BASE_URL}/dog`, {
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
    .then(() => dispatch(fetchDog()))
    .catch(err => {
      return new Error(err);
    })
}