import Users from '../services/users';	
import { getAllUsers } from '../reducers/users';

export const getUsers = () => (dispatch, getState) => {
	const allUsers = getAllUsers(getState());
	if (allUsers !== undefined && allUsers.length) {
		return Promise.resolve(allUsers);
	}
	dispatch(requestUsers());
	return Users.getUsers().then(data => {
		dispatch(receiveUsers(data.users));
		return data.users;
	}).catch(error => {
		dispatch(errorReceivingUsers());
		return Promise.reject(error.response);
	});
};

export const removeUser = (id) => dispatch => {
	dispatch(removingUser(id));
	return Users.removeUser(id)
		.then(data => {
			dispatch(removedUser(id));
		})
		.catch(error => {
			dispatch(errorRemovingUser(id));
			return Promise.reject(error.response);
		});
}

export const requestUsers = () => {
	return {
		type: 'REQUEST_USERS'
	}
}

export const receiveUsers = (users) => {
	return {
		type: 'RECEIVE_USERS',
		users: users
	}
}

export const errorReceivingUsers = () => {
	return {
		type: 'ERROR_RECEIVE_USERS'
	}
}

export const removedUser = (id) => {
	return {
		type: 'REMOVED_USER',
		id: id
	}
}

export const removingUser = (id) => {
	return {
		type: 'REMOVING_USER',
		id: id
	}
}

export const errorRemovingUser = (id) => {
	return {
		type: 'ERROR_REMOVING_USER',
		id: id
	}
}