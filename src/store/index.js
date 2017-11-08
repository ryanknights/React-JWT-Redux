import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers/index';

const history = createHistory();

let store = createStore(
	rootReducer,
	applyMiddleware(
		thunk, 
		routerMiddleware(history)
	)
);

export { store, history };