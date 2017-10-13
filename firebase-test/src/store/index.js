import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import movies from '../reducers/movies.js';
import users from '../reducers/users.js';
import error from '../reducers/error.js';

const rootReducer = combineReducers({
  movies,
  users,
  error
});

const store = createStore(

  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)

);

export default store;
