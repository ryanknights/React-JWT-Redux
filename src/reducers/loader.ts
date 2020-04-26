import { LoadingState } from '../interfaces/types';
import { AppState } from '../store';
import {
  LoadingActionTypes,
  SET_LOADING,
  SET_APP_LOADING,
} from '../actions/loadingTypes';

const initialLoading: LoadingState = {
  loading: false,
  appLoading: true,
};

export const loader = (state: LoadingState = initialLoading, action: LoadingActionTypes) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    case SET_APP_LOADING:
      return {
        ...state,
        appLoading: action.status,
      };
    default:
      return state;
  }
};

export const getLoading = (state: AppState): boolean => state.loader.loading;
export const getAppLoading = (state: AppState): boolean => state.loader.appLoading;
