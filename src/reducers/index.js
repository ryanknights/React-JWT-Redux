import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import feedback from './feedback';
import loader from './loader';
import auth from './auth';

const rootReducer = combineReducers({
	feedback,
	loader,
	auth,
	router: routerReducer
});

export default rootReducer;
