import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { getPosts, removePost, addPost } from '../../../actions/posts';
import { setFeedback } from '../../../actions/feedback';
import { getAllPosts, getIsFetchingPosts, getIsAddingPost, getIsRemovingPost } from '../../../reducers/posts';

import PostsList from './PostsList';
import AddForm from './AddForm';

class PagePosts extends Component {
	componentDidMount() {
		if (!this.props.fetching) {
			this.props.getPosts()
				.catch(error => {
					this.props.setFeedback({message: 'fdsf', 'type': 'warning'});
				});
		}
	}
	render () {
		return (
			<div>
				<h1 className="display-4">Posts</h1>
				<PostsList 
					posts={this.props.posts}
					fetching={this.props.fetching}
					remove={this.props.removePost}
					removing={this.props.removing}
					setFeedback={this.props.setFeedback}
				/>
				<AddForm
					add={this.props.addPost}
					adding={this.props.adding}
					setFeedback={this.props.setFeedback}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: getAllPosts(state),
		fetching: getIsFetchingPosts(state),
		adding: getIsAddingPost(state),
		removing: getIsRemovingPost(state)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	getPosts: getPosts,
	removePost: removePost,
	setFeedback: setFeedback,
	addPost: addPost
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PagePosts);