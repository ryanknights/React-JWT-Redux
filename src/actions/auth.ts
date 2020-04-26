import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { push } from 'connected-react-router';
import Auth from '../services/auth';
import {
  SET_LOGGED_IN,
  SET_ACCESS_TOKEN,
  SET_REFRESH_TOKEN,
  SET_USER,
  SetLoggedInAction,
  SetUserAction,
  SetAccessTokenAction,
  SetRefreshTokenAction,
  LoginCredentials,
} from './authTypes';
import { AppState } from '../store';
import { User } from '../interfaces/types';

export const setLoggedIn = (status: boolean): SetLoggedInAction => ({
  type: SET_LOGGED_IN,
  status,
});

export const setUser = (user: User | null): SetUserAction => ({
  type: SET_USER,
  user,
});

export const setAccessToken = (token: string): SetAccessTokenAction => {
  if (token) {
    localStorage.setItem('accessToken', token);
  } else {
    localStorage.removeItem('accessToken');
  }
  return {
    type: SET_ACCESS_TOKEN,
    token,
  };
};

export const setRefreshToken = (token: string): SetRefreshTokenAction => {
  if (token) {
    localStorage.setItem('refreshToken', token);
  } else {
    localStorage.removeItem('refreshToken');
  }
  return {
    type: SET_REFRESH_TOKEN,
    token,
  };
};

export const clearAccessToken = (): SetAccessTokenAction => {
  localStorage.removeItem('accessToken');
  return {
    type: SET_ACCESS_TOKEN,
    token: null,
  };
};

export const clearRefreshToken = (): SetRefreshTokenAction => {
  localStorage.removeItem('refreshToken');
  return {
    type: SET_REFRESH_TOKEN,
    token: null,
  };
};


export const login = (
  credentials: LoginCredentials,
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => Auth.login(credentials)
  .then((data) => {
    dispatch(setLoggedIn(true));
    dispatch(setUser(data.user));
    dispatch(setAccessToken(data.token.access));
    dispatch(setRefreshToken(data.token.refresh));
    return data;
  });

export const register = (
  credentials: LoginCredentials,
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => Auth.register(credentials)
  .then(() => dispatch(login(credentials)));

export const authenticate = (
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => Auth.authenticate()
  .then((data) => {
    dispatch(setLoggedIn(true));
    dispatch(setUser(data.user));
    return data;
  });

export const logout = (
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => {
  dispatch(setLoggedIn(false));
  dispatch(setUser(null));
  dispatch(clearAccessToken());
  dispatch(clearRefreshToken());
};

export const redirectToLogin = (
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => {
  dispatch(push('/login'));
};
