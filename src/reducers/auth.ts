import { AuthState } from '../interfaces/types';
import { AppState } from '../store';
import {
  AuthActionTypes,
  SET_LOGGED_IN,
  SET_USER,
  SET_ACCESS_TOKEN,
  SET_REFRESH_TOKEN,
} from '../actions/authTypes';

const initialAuth: AuthState = {
  loggedin: false,
  user: null,
  accessToken: null,
  refreshToken: null,
};

export const auth = (state: AuthState = initialAuth, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedin: action.status,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.token,
      };
    case SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.token,
      };
    default:
      return state;
  }
};

export const getAuth = (state: AppState) => state.auth;
export const getLoggedIn = (state: AppState) => state.auth.loggedin;
export const getUser = (state: AppState) => state.auth.user;
export const getUserIsAdmin = (state: AppState) => (state.auth.user && state.auth.user.isAdmin);
export const getAccessToken = (state: AppState) => state.auth.accessToken;
export const getRefreshToken = (state: AppState) => state.auth.refreshToken;
