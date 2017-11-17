import { FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR } from '../actions';

const initialState = {
  cheeses: [],
  error: null
};

export function cheesesReducer(state = initialState, action) {
  if (action.type === FETCH_CHEESES_SUCCESS) {
    return Object.assign({}, state, {
      cheeses: action.cheeses,
      error: null
    });
  } else if (action.type === FETCH_CHEESES_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
    });
  }
  return state;
}