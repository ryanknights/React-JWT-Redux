import Feedback from '../interfaces/Feedback';

export const SET_FEEDBACK = 'SET_FEEDBACK';
export const CLEAR_FEEDBACK = 'CLEAR_FEEDBACK';

export interface SetFeedbackAction {
  type: typeof SET_FEEDBACK;
  payload: Feedback;
}

export interface ClearFeedbackAction {
  type: typeof CLEAR_FEEDBACK;
}

export type FeedbackActionTypes =
  SetFeedbackAction
  | ClearFeedbackAction
