import { push } from 'react-router-redux';
import Auth from '../services/auth';

export const setLoggedIn = (status) => ({
  type: 'SET_LOGGED_IN',
  status,
});

export const setUser = (user) => ({
  type: 'SET_USER',
  user,
});

export const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
  return {
    type: 'SET_ACCESS_TOKEN',
    token,
  };
};

export const setRefreshToken = (token) => {
  localStorage.setItem('refreshToken', token);
  return {
    type: 'SET_REFRESH_TOKEN',
    token,
  };
};

export const clearAccessToken = () => {
  localStorage.removeItem('accessToken');
  return {
    type: 'SET_ACCESS_TOKEN',
    token: null,
  };
};

export const clearRefreshToken = () => {
  localStorage.removeItem('refreshToken');
  return {
    type: 'SET_REFRESH_TOKEN',
    token: null,
  };
};

export const login = (credentials) => (dispatch) => Auth.login(credentials)
  .then((data) => {
    dispatch(setLoggedIn(true));
    dispatch(setUser(data.user));
    dispatch(setAccessToken(data.token.access));
    dispatch(setRefreshToken(data.token.refresh));
    return data;
  });

export const register = (credentials) => (dispatch) => Auth.register(credentials)
  .then((data) => dispatch(login(credentials)));

export const authenticate = () => (dispatch) => Auth.authenticate()
  .then((data) => {
    dispatch(setLoggedIn(true));
    dispatch(setUser(data.user));
    return data;
  });

export const logout = () => (dispatch) => {
  dispatch(setLoggedIn(false));
  dispatch(setUser(false));
  dispatch(clearAccessToken());
  dispatch(clearRefreshToken());
};

export const redirectToLogin = () => (dispatch) => {
  dispatch(push('/login'));
};
