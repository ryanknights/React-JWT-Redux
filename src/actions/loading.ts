import {
  SET_LOADING,
  SET_APP_LOADING,
  SetLoadingAction,
  SetAppLoadingAction,
} from './loadingTypes';

export const setLoading = (status: boolean): SetLoadingAction => ({
  type: SET_LOADING,
  status,
});

export const setAppLoading = (status: boolean): SetAppLoadingAction => ({
  type: SET_APP_LOADING,
  status,
});
