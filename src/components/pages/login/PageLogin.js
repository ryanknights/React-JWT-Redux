/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFeedback, setDelayedFeedback } from '../../../actions/feedback';
import { login } from '../../../actions/auth';

import LoginForm from './LoginForm';

const propTypes = {
  setFeedback: PropTypes.func.isRequired,
  setDelayedFeedback: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  login: PropTypes.func.isRequired,
};

function PageLogin({
  setFeedback,
  setDelayedFeedback,
  history,
  login,
}) {
  return (
    <div>
      <h1 className="display-4">Login</h1>
      <div className="row">
        <div className="col-md-6">
          <LoginForm
            setFeedback={setFeedback}
            setDelayedFeedback={setDelayedFeedback}
            history={history}
            login={login}
          />
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setFeedback,
    setDelayedFeedback,
    login,
  }, dispatch);
}

PageLogin.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(PageLogin);
