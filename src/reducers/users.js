const users = (state = {all: [], isFetching: false, isRemoving: false, isAdding: false}, action) => {
	switch (action.type) {
		case 'REQUEST_USERS':
			return {...state, ...{isFetching: true}};
		case 'RECEIVE_USERS':
			return {...state, ...{all: action.users, isFetching: false}};
		case 'ERROR_RECEIVE_USERS':
			return {...state, ...{isFetching: false}};
		case 'REMOVING_USER':
			return {...state, ...{isRemoving: true}};
		case 'REMOVED_USER':
			var users = state.all.filter(user => user._id !== action.id);
			return {...state, ...{all: users, isRemoving: false}};	
		case 'ERROR_REMOVING_USER':
			return {...state, ...{isRemoving: false}};														
		default:
			return state;
	}
}

export default users;