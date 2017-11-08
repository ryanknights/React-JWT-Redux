const initialFeedback = {
	message: false,
	type: false	
};

const feedback = (state = initialFeedback, action) => {
	switch (action.type) {
		case 'SET_FEEDBACK':
			return {...state, message: action.payload.message, type: action.payload.type}
		case 'CLEAR_FEEDBACK':
			return initialFeedback;
		default:
			return state;
	}
}

export default feedback;