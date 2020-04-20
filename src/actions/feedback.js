export const clearFeedback = () => ({
  type: 'CLEAR_FEEDBACK',
});

export const setFeedback = (data) => ({
  type: 'SET_FEEDBACK',
  payload: data,
});

export const setDelayedFeedback = (data) => (dispatch) => {
  setTimeout(() => {
    dispatch(setFeedback(data));
  }, data.delay || 10);
};
