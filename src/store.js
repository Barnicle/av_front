import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';
const defaultState = {
  pending: false,
  searchId: '',
  ticketsInit: null,
  tickets: null,
  filter: 'none', //none, fast, cheap
  stops: [true, true, true, true, true],
  error: null
};

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
