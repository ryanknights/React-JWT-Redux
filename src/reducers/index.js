import { combineReducers } from 'redux';
import feedback from './feedback';
import loading from './loading';
import auth from './auth';

const rootReducer = combineReducers({
	feedback,
	loading,
	auth
});

export default rootReducer;
