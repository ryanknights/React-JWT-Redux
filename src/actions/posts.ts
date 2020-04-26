import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  ERROR_RECEIVE_POSTS,
  REMOVED_POST,
  REMOVING_POST,
  ERROR_REMOVING_POST,
  ADDING_POST,
  ADDED_POST,
  ERROR_ADDING_POST,
  RequestPostsAction,
  ReceivePostsAction,
  ErrorReceivingPostsAction,
  RemovedPostAction,
  RemovingPostAction,
  ErrorRemovingPostAction,
  AddingPostAction,
  AddedPostAction,
  ErrorAddingPostAction,
} from './postsTypes';
import { AppState } from '../store';
import Posts from '../services/posts';
import { getAllPosts } from '../reducers/posts';
import Post from '../interfaces/Post';

export const requestPosts = (): RequestPostsAction => ({
  type: REQUEST_POSTS,
});

export const receivePosts = (posts: Post[]): ReceivePostsAction => ({
  type: RECEIVE_POSTS,
  posts,
});

export const errorReceivingPosts = (): ErrorReceivingPostsAction => ({
  type: ERROR_RECEIVE_POSTS,
});

export const removedPost = (id: string | number): RemovedPostAction => ({
  type: REMOVED_POST,
  id,
});

export const removingPost = (id: string | number): RemovingPostAction => ({
  type: REMOVING_POST,
  id,
});

export const errorRemovingPost = (id: string | number): ErrorRemovingPostAction => ({
  type: ERROR_REMOVING_POST,
  id,
});

export const addingPost = (): AddingPostAction => ({
  type: ADDING_POST,
});

export const addedPost = (post: Post): AddedPostAction => ({
  type: ADDED_POST,
  post,
});

export const errorAddingPost = (): ErrorAddingPostAction => ({
  type: ERROR_ADDING_POST,
});

export const getPosts = (
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch, getState) => {
  const allPosts = getAllPosts(getState());
  if (allPosts !== undefined && allPosts.length) {
    return Promise.resolve(allPosts);
  }
  dispatch(requestPosts());
  return Posts.getPosts().then((posts) => {
    dispatch(receivePosts(posts));
    return posts;
  }).catch((error) => {
    dispatch(errorReceivingPosts());
    return Promise.reject(error.response);
  });
};

export const removePost = (
  id: string | number,
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => {
  dispatch(removingPost(id));
  return Posts.removePost(id)
    .then(() => {
      dispatch(removedPost(id));
    })
    .catch((error) => {
      dispatch(errorRemovingPost(id));
      return Promise.reject(error.response);
    });
};

export const addPost = (
  post: Post,
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => {
  dispatch(addingPost());
  return Posts.addPost(post).then((data) => {
    dispatch(addedPost(data.post));
    return data;
  }).catch((error) => {
    dispatch(errorAddingPost());
    return Promise.reject(error.response);
  });
};
