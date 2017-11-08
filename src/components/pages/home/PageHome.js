import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageHome extends Component {
	render () {
		return (
			<div>
				<h1 className="display-4">Home</h1>
				{ JSON.stringify(this.props.auth) }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(PageHome);