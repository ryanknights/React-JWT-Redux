import { setAppLoading } from './loading';
import * as auth from './auth';

export default () => (dispatch) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken) {
    return dispatch(setAppLoading(false));
  }

  dispatch(auth.setAccessToken(accessToken));
  dispatch(auth.setRefreshToken(refreshToken));

  return dispatch(auth.authenticate())
    .then(() => dispatch(setAppLoading(false)))
    .catch((error) => {
      dispatch(setAppLoading(false));
      dispatch(auth.logout());
      dispatch(auth.redirectToLogin());
      return error;
    });
};
