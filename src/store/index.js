import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers/index';

const history = createBrowserHistory();
const store = createStore(
  rootReducer(history),
  applyMiddleware(
    thunk,
    routerMiddleware(history),
  ),
);

export { store, history };
