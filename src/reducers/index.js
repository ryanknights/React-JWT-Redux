import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { feedback } from './feedback';
import { loader } from './loader';
import { auth } from './auth';
import { posts } from './posts';
import { users } from './users';

const rootReducer = combineReducers({
  feedback,
  loader,
  auth,
  posts,
  users,
  router: routerReducer,
});

export default rootReducer;
