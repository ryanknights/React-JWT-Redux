import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { setFeedback, setDelayedFeedback } from '../../../actions/feedback';
import { register } from '../../../actions/auth';

import RegisterForm from './RegisterForm';

class PageRegister extends Component {
	render () {
		return (
			<div>
				<h1 className="display-4">Register</h1>
				<div className="row">
					<div className="col-md-6">
						<RegisterForm
							setFeedback={this.props.setFeedback}
							setDelayedFeedback={this.props.setDelayedFeedback}
							history={this.props.history}
							register={this.props.register}
						/>
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setFeedback, setDelayedFeedback, register
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(PageRegister);