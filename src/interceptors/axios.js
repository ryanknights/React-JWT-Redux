import axios from 'axios';
import { store } from '../store/index';
import Auth from '../services/auth';

import { setAccessToken, logout, redirectToLogin } from '../actions/auth';
import { setLoading } from '../actions/loading';
import { getAccessToken, getRefreshToken } from '../reducers/auth';

const onSuccess = (response) => {
  store.dispatch(setLoading(false));
  return response;
};

const onError = (error) => {
  switch (error.response.status) {
    case 401:
      // eslint-disable-next-line no-case-declarations
      const originalRequest = error.config;
      // eslint-disable-next-line no-underscore-dangle
      if (!originalRequest._retry && error.response.data === 'Token Expired') {
        // eslint-disable-next-line no-underscore-dangle
        originalRequest._retry = true;
        const refreshToken = getRefreshToken(store.getState());
        return Auth.refresh(refreshToken)
          .then((response) => {
            store.dispatch(setAccessToken(response.token.access));
            return axios(originalRequest);
          }).catch((refreshError) => {
            store.dispatch(logout());
            store.dispatch(redirectToLogin());
            return Promise.reject(refreshError);
          });
      }
      break;
    default:
      break;
  }

  store.dispatch(setLoading(false));
  return Promise.reject(error);
};

const beforeRequestSuccess = (config) => {
  const accessToken = getAccessToken(store.getState());
  store.dispatch(setLoading(true));
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

const beforeRequestError = (error) => {
  store.dispatch(setLoading(false));
  return Promise.reject(error);
};

export {
  onSuccess,
  onError,
  beforeRequestSuccess,
  beforeRequestError,
};
