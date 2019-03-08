import { API_BASE_URL } from '../../config'


export const FETCH_DOG = 'FETCH_DOG';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG,
  dog
})
export const fetchDog = () => (dispatch) => {
  return fetch(`${API_BASE_URL}/dogs`, {
    method: 'GET',
    header: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(dog => dispatch(fetchDogSuccess(dog)))
    .catch(err => {
      return new Error(err);
    })
}