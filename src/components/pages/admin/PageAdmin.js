import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageAdmin extends Component {
	render () {
		return (
			<div>
				<h1 className="display-4">Admin</h1>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(PageAdmin);