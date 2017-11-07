import React, { Component } from 'react';
import { connect } from 'react-redux';

class PagePosts extends Component {
	render () {
		return (
			<div>
				<h1 className="display-4">Posts</h1>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(PagePosts);