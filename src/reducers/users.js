export const users = (state = { all: [], isFetching: false, isRemoving: false }, action) => {
  switch (action.type) {
    case 'REQUEST_USERS':
      return { ...state, ...{ isFetching: true } };
    case 'RECEIVE_USERS':
      return { ...state, ...{ all: action.users, isFetching: false } };
    case 'ERROR_RECEIVE_USERS':
      return { ...state, ...{ isFetching: false } };
    case 'REMOVING_USER':
      return { ...state, ...{ isRemoving: true } };
    case 'REMOVED_USER': {
      // eslint-disable-next-line no-underscore-dangle
      const allUsers = state.all.filter((user) => user._id !== action.id);
      return { ...state, ...{ all: allUsers, isRemoving: false } };
    }
    case 'ERROR_REMOVING_USER':
      return { ...state, ...{ isRemoving: false } };
    default:
      return state;
  }
};

export const getAllUsers = (state) => state.users.all;
export const getIsFetchingUsers = (state) => state.users.isFetching;
export const getIsRemovingUser = (state) => state.users.isRemoving;
