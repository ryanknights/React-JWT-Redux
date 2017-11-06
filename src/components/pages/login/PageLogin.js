import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { setFeedback } from '../../../actions/feedback';
import { login } from '../../../actions/auth';

import LoginForm from './LoginForm';

class PageLogin extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div>
				<h1 className="display-4">Login</h1>
				<div className="row">
					<div className="col-md-6">
						<LoginForm
							setFeedback={this.props.setFeedback}
							login={this.props.login}
						/>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setFeedback, login
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);