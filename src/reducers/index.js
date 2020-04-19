import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { feedback } from './feedback';
import { loader } from './loader';
import { auth } from './auth';
import { posts } from './posts';
import { users } from './users';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  feedback,
  loader,
  auth,
  posts,
  users,
});

export default rootReducer;
