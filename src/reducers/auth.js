const initialAuth = {
	loggedin: false,
	user: false,
	tokens: {
		access: null,
		refresh: null
	}
};

const auth = (state = initialAuth, action) => {
	switch (action.type) {
		case 'SET_LOGGED_IN':
			return {...state, ...{ loggedin: action.status}};
		case 'SET_USER':
			return {...state, ...{ user: action.user}};
		case 'CLEAR_USER':
			return {...state, ...{ user: false}};
		case 'SET_ACCESS_TOKEN':
			return {
					...state,
					tokens: {
						access: action.token,
						refresh: state.tokens.refresh
					}
				};
		case 'CLEAR_ACCESS_TOKEN':
			return {
				...state,
				tokens: {
					access: null,
					refresh: state.tokens.refresh
				}
			};			
		case 'SET_REFRESH_TOKEN':
			return {
				...state,
				tokens: {
					access: state.tokens.access,
					refresh: action.token
				}
			};
		case 'CLEAR_REFRESH_TOKEN':
			return {
				...state,
				tokens: {
					access: state.tokens.access,
					refresh: null
				}
			};							
		default:
			return state;
	}
}

export default auth;