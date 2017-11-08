import Posts from '../services/posts';	

export const getPosts = () => (dispatch, getState) => {
	const { posts } = getState();
	if (posts.all !== undefined && posts.all.length) {
		return Promise.resolve(posts);
	}
	dispatch(requestPosts());
	return Posts.getPosts().then(posts => {
		dispatch(receivePosts(posts));
		return posts;
	}).catch(error => {
		dispatch(errorReceivingPosts());
		return Promise.reject(error.response);
	});
};

export const removePost = (id) => dispatch => {
	dispatch(removingPost(id));
	return Posts.removePost(id)
		.then(data => {
			dispatch(removedPost(id));
		})
		.catch(error => {
			dispatch(errorRemovingPost(id));
			return Promise.reject(error.response);
		});
}

export const addPost = (post) => dispatch => {
	return Posts.addPost(post).then(data => {
		dispatch(addedPost(data.post));
		return data;
	}).catch(error => {
		dispatch(errorAddingPost());
		return Promise.reject(error.response)
	});
}

export const requestPosts = () => {
	return {
		type: 'REQUEST_POSTS'
	}
}

export const receivePosts = (posts) => {
	return {
		type: 'RECEIVE_POSTS',
		posts: posts
	}
}

export const errorReceivingPosts = (posts) => {
	return {
		type: 'ERROR_RECEIVE_POSTS'
	}
}

export const removedPost = (id) => {
	return {
		type: 'REMOVED_POST',
		id: id
	}
}

export const removingPost = (id) => {
	return {
		type: 'REMOVING_POST',
		id: id
	}
}

export const errorRemovingPost = (id) => {
	return {
		type: 'ERROR_REMOVING_POST',
		id: id
	}
}

export const addingPost = () => {
	return {
		type: 'ADDING_POST'
	}
}

export const addedPost = (post) => {
	return {
		type: 'ADDED_POST',
		post: post
	}
}

export const errorAddingPost = () => {
	return {
		type: 'ERROR_ADDING_POST'
	}
}