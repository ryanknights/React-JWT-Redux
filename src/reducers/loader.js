export const loader = (state = { loading: false, appLoading: true }, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, ...{ loading: action.status } };
    case 'SET_APP_LOADING':
      return { ...state, ...{ appLoading: action.status } };
    default:
      return state;
  }
};

export const getLoading = (state) => state.loader.loading;
export const getAppLoading = (state) => state.loader.appLoading;
