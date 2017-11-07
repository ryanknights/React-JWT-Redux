import { combineReducers } from 'redux';
import feedback from './feedback';
import loader from './loader';
import auth from './auth';

const rootReducer = combineReducers({
	feedback,
	loader,
	auth
});

export default rootReducer;
