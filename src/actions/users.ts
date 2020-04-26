import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  REQUEST_USERS,
  RECEIVE_USERS,
  ERROR_RECEIVE_USERS,
  REMOVING_USER,
  REMOVED_USER,
  ERROR_REMOVING_USER,
  RequestUsersAction,
  ReceiveUsersAction,
  ErrorReceiveUsersAction,
  RemovingUserAction,
  RemovedUserAction,
  ErrorRemovingUserAction,
} from './usersTypes';
import { AppState } from '../store';
import Users from '../services/users';
import { getAllUsers } from '../reducers/users';
import User from '../interfaces/User';

export const requestUsers = (): RequestUsersAction => ({
  type: REQUEST_USERS,
});

export const receiveUsers = (users: User[]): ReceiveUsersAction => ({
  type: RECEIVE_USERS,
  users,
});

export const errorReceivingUsers = (): ErrorReceiveUsersAction => ({
  type: ERROR_RECEIVE_USERS,
});

export const removedUser = (id: string | number): RemovedUserAction => ({
  type: REMOVED_USER,
  id,
});

export const removingUser = (id: string | number): RemovingUserAction => ({
  type: REMOVING_USER,
  id,
});

export const errorRemovingUser = (id: string | number): ErrorRemovingUserAction => ({
  type: ERROR_REMOVING_USER,
  id,
});

export const getUsers = (
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch, getState) => {
  const allUsers = getAllUsers(getState());
  if (allUsers !== undefined && allUsers.length) {
    return Promise.resolve(allUsers);
  }
  dispatch(requestUsers());
  return Users.getUsers()
    .then((data) => {
      dispatch(receiveUsers(data.users));
      return data.users;
    }).catch((error) => {
      dispatch(errorReceivingUsers());
      return Promise.reject(error.response);
    });
};

export const removeUser = (
  id: string | number,
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => {
  dispatch(removingUser(id));
  return Users.removeUser(id)
    .then(() => {
      dispatch(removedUser(id));
    })
    .catch((error) => {
      dispatch(errorRemovingUser(id));
      return Promise.reject(error.response);
    });
};
