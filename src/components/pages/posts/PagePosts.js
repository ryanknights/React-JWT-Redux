import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { getPosts } from '../../../actions/posts';
import { setLoading } from '../../../actions/loading';

import PostsList from './PostsList';

class PagePosts extends Component {
	componentDidMount() {
		if (!this.props.fetching) {
			this.props.getPosts();
		}
	}
	render () {
		console.log('Render Posts');
		return (
			<div>
				<h1 className="display-4">Posts</h1>
				<PostsList 
					posts={this.props.posts}
					fetching={this.props.isFetching}
				/>
				<button onClick={event => this.props.setLoading(true)}>Enable Loading</button>
				<button onClick={event => this.props.setLoading(false)}>Disable Loading</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.all,
		fetching: state.posts.isFetching
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	getPosts: getPosts,
	setLoading: setLoading
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PagePosts);