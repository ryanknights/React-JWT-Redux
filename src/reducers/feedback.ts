import { FeedbackState } from '../interfaces/types';
import { AppState } from '../store';
import {
  FeedbackActionTypes,
  SET_FEEDBACK,
  CLEAR_FEEDBACK,
} from '../actions/feedbackTypes';

const initialFeedback: FeedbackState = {
  message: false,
  type: false,
};

export const feedback = (state: FeedbackState = initialFeedback, action: FeedbackActionTypes) => {
  switch (action.type) {
    case SET_FEEDBACK:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
      };
    case CLEAR_FEEDBACK:
      return {
        ...initialFeedback,
      };
    default:
      return state;
  }
};

export const getFeedback = (state: AppState) => state.feedback;
