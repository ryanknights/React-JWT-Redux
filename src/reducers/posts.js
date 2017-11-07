const posts = (state = {all: [], isFetching: false}, action) => {
	switch (action.type) {
		case 'REQUEST_POSTS':
			return {...state, ...{isFetching: true}};
		case 'RECEIVE_POSTS':
			return {...state, ...{all: action.posts, isFetching: false}};
		case 'ERROR_RECEIVE_POSTS':
			return {...state, ...{isFetching: false}};		
		default:
			return state;
	}
}

export default posts;