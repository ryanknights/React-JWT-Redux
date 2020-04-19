import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLoading, getAppLoading } from '../reducers/loader';

const propTypes = {
  appLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

function Loader({ appLoading, loading }) {
  if (appLoading) {
    return (
      <div className="loader__app-loading">
        App Loading...
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loader__loading">
        Loading...
      </div>
    );
  }

  return null;
}

function mapStateToProps(state) {
  return {
    loading: getLoading(state),
    appLoading: getAppLoading(state),
  };
}

Loader.propTypes = propTypes;

export default connect(mapStateToProps)(Loader);
