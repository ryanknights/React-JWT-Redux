import Post from '../interfaces/Post';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ERROR_RECEIVE_POSTS = 'ERROR_RECEIVE_POSTS';
export const REMOVED_POST = 'REMOVED_POST';
export const REMOVING_POST = 'REMOVING_POST';
export const ERROR_REMOVING_POST = 'ERROR_REMOVING_POST';
export const ADDING_POST = 'ADDING_POST';
export const ADDED_POST = 'ADDED_POST';
export const ERROR_ADDING_POST = 'ERROR_ADDING_POST';

export interface RequestPostsAction {
  type: typeof REQUEST_POSTS;
}

export interface ReceivePostsAction {
  type: typeof RECEIVE_POSTS;
  posts: Post[];
}

export interface ErrorReceivingPostsAction {
  type: typeof ERROR_RECEIVE_POSTS;
}

export interface RemovingPostAction {
  type: typeof REMOVING_POST;
  id: string | number;
}

export interface RemovedPostAction {
  type: typeof REMOVED_POST;
  id: string | number;
}

export interface ErrorRemovingPostAction {
  type: typeof ERROR_REMOVING_POST;
  id: string | number;
}

export interface AddingPostAction {
  type: typeof ADDING_POST;
}

export interface AddedPostAction {
  type: typeof ADDED_POST;
  post: Post;
}

export interface ErrorAddingPostAction {
  type: typeof ERROR_ADDING_POST;
}

export type PostsActionTypes =
    RequestPostsAction
  | ReceivePostsAction
  | ErrorReceivingPostsAction
  | RemovingPostAction
  | RemovedPostAction
  | ErrorRemovingPostAction
  | AddingPostAction
  | AddedPostAction
  | ErrorAddingPostAction
