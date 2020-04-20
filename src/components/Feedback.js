import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { clearFeedback } from '../actions/feedback';
import { getFeedback } from '../reducers/feedback';

const propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.string,
  ]).isRequired,
  clear: PropTypes.func.isRequired,
  feedback: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.bool,
  ]).isRequired,
};

class Feedback extends Component {
  componentDidUpdate(prevProps) {
    const { location, clear } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      clear();
    }
  }

  render() {
    const { feedback, clear } = this.props;
    if (!feedback.message) {
      return null;
    }
    return (
      <div className="feedback">
        <div className={`alert alert-${feedback.type}`}>
          <button type="button" className="close" aria-label="Close" onClick={clear}>
            <span aria-hidden="true">&times;</span>
          </button>
          { feedback.message }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    feedback: getFeedback(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    clear: clearFeedback,
  }, dispatch);
}

Feedback.propTypes = propTypes;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feedback));
