import { FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR } from '../actions';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export function cheesesReducer(state = initialState, action) {
  if (action.type === FETCH_CHEESES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } 
   else if (action.type === FETCH_CHEESES_SUCCESS) {
    return Object.assign({}, state, {
      cheeses: action.cheeses,
      loading: false,
      error: null
    });
  } 
   else if (action.type === FETCH_CHEESES_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false,
    });
  }
  return state;
}