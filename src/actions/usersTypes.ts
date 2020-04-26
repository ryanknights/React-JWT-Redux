import User from '../interfaces/User';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ERROR_RECEIVE_USERS = 'ERROR_RECEIVE_USERS';
export const REMOVED_USER = 'REMOVED_USER';
export const REMOVING_USER = 'REMOVING_USER';
export const ERROR_REMOVING_USER = 'ERROR_REMOVING_USER';

export interface RequestUsersAction {
  type: typeof REQUEST_USERS;
}

export interface ReceiveUsersAction {
  type: typeof RECEIVE_USERS;
  users: User[];
}

export interface ErrorReceiveUsersAction {
  type: typeof ERROR_RECEIVE_USERS;
}

export interface RemovedUserAction {
  type: typeof REMOVED_USER;
  id: string | number;
}

export interface RemovingUserAction {
  type: typeof REMOVING_USER;
  id: string | number;
}

export interface ErrorRemovingUserAction {
  type: typeof ERROR_REMOVING_USER;
  id: string | number;
}

export type UsersActionTypes =
  RequestUsersAction
  | ReceiveUsersAction
  | ErrorReceiveUsersAction
  | RemovedUserAction
  | RemovingUserAction
  | ErrorRemovingUserAction
