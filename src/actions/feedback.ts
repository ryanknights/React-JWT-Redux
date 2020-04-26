import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  SET_FEEDBACK,
  CLEAR_FEEDBACK,
  SetFeedbackAction,
  ClearFeedbackAction,
} from './feedbackTypes';
import Feedback from '../interfaces/Feedback';
import { AppState } from '../store';

export const clearFeedback = (): ClearFeedbackAction => ({
  type: CLEAR_FEEDBACK,
});

export const setFeedback = (data: Feedback): SetFeedbackAction => ({
  type: SET_FEEDBACK,
  payload: data,
});

export const setDelayedFeedback = (
  data: Feedback,
): ThunkAction<void, AppState, unknown, Action<string>> => (dispatch) => {
  setTimeout(() => {
    dispatch(setFeedback(data));
  }, data.delay || 10);
};
