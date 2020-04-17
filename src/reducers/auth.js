const initialAuth = {
  loggedin: false,
  user: false,
  accessToken: null,
  refreshToken: null,
};

export const auth = (state = initialAuth, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return { ...state, ...{ loggedin: action.status } };
    case 'SET_USER':
      return { ...state, ...{ user: action.user } };
    case 'CLEAR_USER':
      return { ...state, ...{ user: false } };
    case 'SET_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: action.token,
      };
    case 'CLEAR_ACCESS_TOKEN':
      return {
        ...state,
        accessToken: null,
      };
    case 'SET_REFRESH_TOKEN':
      return {
        ...state,
        refreshToken: action.token,
      };
    case 'CLEAR_REFRESH_TOKEN':
      return {
        ...state,
        refreshToken: null,
      };
    default:
      return state;
  }
};

export const getAuth = (state) => state.auth;
export const getLoggedIn = (state) => state.auth.loggedin;
export const getUser = (state) => state.auth.user;
export const getUserIsAdmin = (state) => (state.auth.user && state.auth.user.isAdmin);
export const getAccessToken = (state) => state.auth.accessToken;
export const getRefreshToken = (state) => state.auth.refreshToken;
