/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import noteApp from 'reducers';

const store = createStore(
  noteApp,
  /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
