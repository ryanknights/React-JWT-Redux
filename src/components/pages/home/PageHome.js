import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAuth } from '../../../reducers/auth';

const propTypes = {
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
};

function PageHome({ auth }) {
  return (
    <div>
      <h1 className="display-4">Home</h1>
      { JSON.stringify(auth) }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: getAuth(state),
  };
}

PageHome.propTypes = propTypes;

export default connect(mapStateToProps)(PageHome);
