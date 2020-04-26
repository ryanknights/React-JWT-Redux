export const SET_LOADING = 'SET_LOADING';
export const SET_APP_LOADING = 'SET_APP_LOADING';

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  status: boolean;
}

export interface SetAppLoadingAction {
  type: typeof SET_APP_LOADING;
  status: boolean;
}

export type LoadingActionTypes =
    SetLoadingAction
    | SetAppLoadingAction
