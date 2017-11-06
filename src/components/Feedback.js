import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { clearFeedback } from '../actions/feedback';

class Feedback extends Component {
	constructor(props) {
		super(props);
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
    feedback: state.feedback
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clear: clearFeedback
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);