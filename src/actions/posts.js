import Posts from '../services/posts';	

export const getPosts = () => dispatch => {
	dispatch(requestPosts());
	return Posts.getPosts().then(posts => {
		dispatch(receievePosts(posts));
		return posts;
	}).catch(error => {
		dispatch(errorReceivingPosts());
		return error;
	});
};

export const requestPosts = () => {
	return {
		type: 'REQUEST_POSTS'
	}
}

export const receievePosts = (posts) => {
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