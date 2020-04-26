import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';

export const history = createBrowserHistory();
const reducer = rootReducer(history);
export type AppState = ReturnType<typeof reducer>;
export const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    routerMiddleware(history),
  ),
);
