export const setLoading = status => {
	return {
		type: 'SET_LOADING',
		status: status
	}
}

export const setAppLoading = status => {
	return {
		type: 'SET_APP_LOADING',
		status: status
	}
}