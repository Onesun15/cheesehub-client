import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cheesesReducer } from './reducers';

const store = createStore(
  cheesesReducer,
  applyMiddleware(thunk)
);

export default store;