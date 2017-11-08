import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuth } from '../../../reducers/auth';

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
		auth: getAuth(state)
	}
}

export default connect(mapStateToProps)(PageHome);