import Posts from '../services/posts';
import { getAllPosts } from '../reducers/posts';

export const requestPosts = () => ({
  type: 'REQUEST_POSTS',
});

export const receivePosts = (posts) => ({
  type: 'RECEIVE_POSTS',
  posts,
});

export const errorReceivingPosts = (posts) => ({
  type: 'ERROR_RECEIVE_POSTS',
});

export const removedPost = (id) => ({
  type: 'REMOVED_POST',
  id,
});

export const removingPost = (id) => ({
  type: 'REMOVING_POST',
  id,
});

export const errorRemovingPost = (id) => ({
  type: 'ERROR_REMOVING_POST',
  id,
});

export const addingPost = () => ({
  type: 'ADDING_POST',
});

export const addedPost = (post) => ({
  type: 'ADDED_POST',
  post,
});

export const errorAddingPost = () => ({
  type: 'ERROR_ADDING_POST',
});

export const getPosts = () => (dispatch, getState) => {
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

export const removePost = (id) => (dispatch) => {
  dispatch(removingPost(id));
  return Posts.removePost(id)
    .then((data) => {
      dispatch(removedPost(id));
    })
    .catch((error) => {
      dispatch(errorRemovingPost(id));
      return Promise.reject(error.response);
    });
};

export const addPost = (post) => (dispatch) => {
  dispatch(addingPost());
  return Posts.addPost(post).then((data) => {
    dispatch(addedPost(data.post));
    return data;
  }).catch((error) => {
    dispatch(errorAddingPost());
    return Promise.reject(error.response);
  });
};
