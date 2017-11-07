import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

class PagePosts extends Component {
	constructor(props) {
		super(props);
	}
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

	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PagePosts);