import Post from './Post';
import User from './User';

export interface FeedbackState {
  message: string | boolean;
  type: string | boolean;
}

export interface AuthState {
  user: User | null;
  loggedin: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface LoadingState {
  loading: boolean;
  appLoading: boolean;
}

export interface PostsState {
  all: Post[];
  isFetching: boolean;
  isRemoving: boolean;
  isAdding: boolean;
}

export interface UsersState {
  all: User[];
  isFetching: boolean;
  isRemoving: boolean;
}
