export const setFeedback = data => {
	return {
		type: 'SET_FEEDBACK',
		payload: data
	}
}

export const setDelayedFeedback = data => {
	return dispatch => {
		setTimeout(() => {
			dispatch(setFeedback(data));
		}, data.delay || 10);
	}
}

export const clearFeedback = () => {
	return {
		type: 'CLEAR_FEEDBACK'
	}
}