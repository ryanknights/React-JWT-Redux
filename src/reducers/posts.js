export const posts = (state = {
  all: [],
  isFetching: false,
  isRemoving: false,
  isAdding: false,
}, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return { ...state, ...{ isFetching: true } };
    case 'RECEIVE_POSTS':
      return { ...state, ...{ all: action.posts, isFetching: false } };
    case 'ERROR_RECEIVE_POSTS':
      return { ...state, ...{ isFetching: false } };
    case 'REMOVING_POST':
      return { ...state, ...{ isRemoving: true } };
    case 'REMOVED_POST': {
      // eslint-disable-next-line no-underscore-dangle
      const allPosts = state.all.filter((post) => post._id !== action.id);
      return { ...state, ...{ all: allPosts, isRemoving: false } };
    }
    case 'ERROR_REMOVING_POST':
      return { ...state, ...{ isRemoving: false } };
    case 'ADDING_POST':
      return { ...state, ...{ isAdding: true } };
    case 'ADDED_POST': {
      const newPosts = [...state.all, action.post];
      return { ...state, ...{ all: newPosts, isAdding: false } };
    }
    case 'ERROR_ADDING_POST':
      return { ...state, ...{ isAdding: false } };
    default:
      return state;
  }
};

export const getAllPosts = (state) => state.posts.all;
export const getIsFetchingPosts = (state) => state.posts.isFetching;
export const getIsRemovingPost = (state) => state.posts.isRemoving;
export const getIsAddingPost = (state) => state.posts.isAdding;
