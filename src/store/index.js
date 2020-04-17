import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';

const history = createHistory();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    routerMiddleware(history),
  ),
);

export { store, history };
