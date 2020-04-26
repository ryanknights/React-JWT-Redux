import { UsersState } from '../interfaces/types';
import { AppState } from '../store';
import {
  UsersActionTypes,
  REQUEST_USERS,
  RECEIVE_USERS,
  ERROR_RECEIVE_USERS,
  REMOVING_USER,
  REMOVED_USER,
  ERROR_REMOVING_USER,
} from '../actions/usersTypes';
import User from '../interfaces/User';

const initialUsers: UsersState = {
  all: [],
  isFetching: false,
  isRemoving: false,
};

export const users = (state: UsersState = initialUsers, action: UsersActionTypes) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_USERS:
      return {
        ...state,
        all: action.users,
        isFetching: false,
      };
    case ERROR_RECEIVE_USERS:
      return {
        ...state,
        isFetching: false,
      };
    case REMOVING_USER:
      return {
        ...state,
        isRemoving: true,
      };
    case REMOVED_USER: {
      // eslint-disable-next-line no-underscore-dangle
      const allUsers = state.all.filter((user: User) => user._id !== action.id);
      return {
        ...state,
        all: allUsers,
        isRemoving: false,
      };
    }
    case ERROR_REMOVING_USER:
      return {
        ...state,
        isRemoving: false,
      };
    default:
      return state;
  }
};

export const getAllUsers = (state: AppState): User[] => state.users.all;
export const getIsFetchingUsers = (state: AppState): boolean => state.users.isFetching;
export const getIsRemovingUser = (state: AppState): boolean => state.users.isRemoving;
