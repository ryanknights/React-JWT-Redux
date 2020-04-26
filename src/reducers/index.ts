import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { History } from 'history';
import { feedback } from './feedback';
import { loader } from './loader';
import { auth } from './auth';
import { posts } from './posts';
import { users } from './users';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  feedback,
  loader,
  auth,
  posts,
  users,
});
