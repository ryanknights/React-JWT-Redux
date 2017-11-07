import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'; 
import { setFeedback, setDelayedFeedback } from '../../../actions/feedback';
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setFeedback, setDelayedFeedback, login
  }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(PageLogin));