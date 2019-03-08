import {
  FETCH_CAT,
  DELETE_CAT
} from '../actions/cat';

const initialState = {
  catToAdopt: {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  error: null,
  loading: false
}

export default function catReducer(action){
  if (action.type === FETCH_CAT) {
    return initialState;
  }
}