import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../store';
import { setAppLoading } from './loading';
import * as auth from './auth';

export default (
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  if (!accessToken || !refreshToken) {
    return dispatch(setAppLoading(false) as Action);
  }

  dispatch(auth.setAccessToken(accessToken));
  dispatch(auth.setRefreshToken(refreshToken));

  return dispatch(
    auth.authenticate() as ThunkAction<Promise<void>, AppState, unknown, Action<string>>,
  )
    .then(() => dispatch(setAppLoading(false)))
    .catch((error: Error) => {
      dispatch(setAppLoading(false));
      dispatch(auth.logout());
      dispatch(auth.redirectToLogin());
      return error;
    });
};
