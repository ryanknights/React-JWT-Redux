import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { setFeedback, setDelayedFeedback } from '../../../actions/feedback';
import { login } from '../../../actions/auth';

import LoginForm from './LoginForm';

class PageLogin extends Component {
	render () {
		return (
			<div>
				<h1 className="display-4">Login</h1>
				<div className="row">
					<div className="col-md-6">
						<LoginForm
							setFeedback={this.props.setFeedback}
							setDelayedFeedback={this.props.setDelayedFeedback}
							history={this.props.history}
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
    setFeedback, setDelayedFeedback, login
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);