import { User } from '../interfaces/types';

export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_USER = 'SET_USER';
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN';

export interface SetLoggedInAction {
  type: typeof SET_LOGGED_IN;
  status: boolean;
}

export interface SetUserAction {
  type: typeof SET_USER;
  user: User | null;
}

export interface SetAccessTokenAction {
  type: typeof SET_ACCESS_TOKEN;
  token: string | null;
}

export interface SetRefreshTokenAction {
  type: typeof SET_REFRESH_TOKEN;
  token: string | null;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export type AuthActionTypes =
  SetLoggedInAction
  | SetUserAction
  | SetAccessTokenAction
  | SetRefreshTokenAction
