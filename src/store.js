import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';
const defaultState = {
  pending: false,
  searchId: '',
  tickets: [],
  error: null
};
// const middlewares = [thunk];
// const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f); //setup ReduxDevTool
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunkMiddleware),window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store;
