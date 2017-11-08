import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'; 
import { clearFeedback } from '../actions/feedback';
import { getFeedback } from '../reducers/feedback';

class Feedback extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.props.clear();
		}
	}
	render() {
		let feedback = this.props.feedback;

		if (!feedback.message) {
			return null;
		} else {
			return (
				<div className="feedback">
					<div className={`alert alert-${feedback.type}`}>
						<button type="button" className="close" aria-label="Close" onClick={this.props.clear}>
							<span aria-hidden="true">&times;</span>
						</button>  		
						{ feedback.message }
					</div>
				</div>
			);
		}		
	}
}

function mapStateToProps(state) {
  return {
    feedback: getFeedback(state)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clear: clearFeedback
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feedback));