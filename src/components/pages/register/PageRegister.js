/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFeedback, setDelayedFeedback } from '../../../actions/feedback';
import { register } from '../../../actions/auth';

import RegisterForm from './RegisterForm';

const propTypes = {
  setFeedback: PropTypes.func.isRequired,
  setDelayedFeedback: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(PropTypes.objecg).isRequired,
  register: PropTypes.func.isRequired,
};

function PageRegister({
  setFeedback,
  setDelayedFeedback,
  history,
  register,
}) {
  return (
    <div>
      <h1 className="display-4">Register</h1>
      <div className="row">
        <div className="col-md-6">
          <RegisterForm
            setFeedback={setFeedback}
            setDelayedFeedback={setDelayedFeedback}
            history={history}
            register={register}
          />
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setFeedback, setDelayedFeedback, register,
  }, dispatch);
}

PageRegister.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(PageRegister);
