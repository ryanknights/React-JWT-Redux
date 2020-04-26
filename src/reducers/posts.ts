import { PostsState } from '../interfaces/types';
import { AppState } from '../store';
import {
  PostsActionTypes,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  ERROR_RECEIVE_POSTS,
  REMOVING_POST,
  REMOVED_POST,
  ERROR_REMOVING_POST,
  ADDING_POST,
  ADDED_POST,
  ERROR_ADDING_POST,
} from '../actions/postsTypes';
import Post from '../interfaces/Post';

const initialPosts: PostsState = {
  all: [],
  isFetching: false,
  isRemoving: false,
  isAdding: false,
};

export const posts = (state: PostsState = initialPosts, action: PostsActionTypes) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        all: action.posts,
        isFetching: false,
      };
    case ERROR_RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
      };
    case REMOVING_POST:
      return {
        ...state,
        isRemoving: true,
      };
    case REMOVED_POST: {
      // eslint-disable-next-line no-underscore-dangle
      const allPosts = state.all.filter((post) => post._id !== action.id);
      return {
        ...state,
        all: allPosts,
        isRemoving: false,
      };
    }
    case ERROR_REMOVING_POST:
      return {
        ...state,
        isRemoving: false,
      };
    case ADDING_POST:
      return {
        ...state,
        isAdding: true,
      };
    case ADDED_POST: {
      const newPosts = [...state.all, action.post];
      return {
        ...state,
        all: newPosts,
        isAdding: false,
      };
    }
    case ERROR_ADDING_POST:
      return {
        ...state,
        isAdding: false,
      };
    default:
      return state;
  }
};

export const getAllPosts = (state: AppState): Post[] => state.posts.all;
export const getIsFetchingPosts = (state: AppState): boolean => state.posts.isFetching;
export const getIsRemovingPost = (state: AppState): boolean => state.posts.isRemoving;
export const getIsAddingPost = (state: AppState): boolean => state.posts.isAdding;
