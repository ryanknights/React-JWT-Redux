import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import feedback from './feedback';
import loader from './loader';
import auth from './auth';
import posts from './posts';

const rootReducer = combineReducers({
	feedback,
	loader,
	auth,
	posts,
	router: routerReducer
});

export default rootReducer;
