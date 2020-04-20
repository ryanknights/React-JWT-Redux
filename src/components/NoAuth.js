import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAppLoading } from '../reducers/loader';
import { getLoggedIn } from '../reducers/auth';

export default (ComposedComponent, config) => {
  const settings = {
    ...{
      redirect: '/',
      admin: false,
    },
    ...config,
  };

  const propTypes = {
    appLoading: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
  };

  class NoAuth extends Component {
    UNSAFE_componentWillMount() {
      this.security(this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      this.security(nextProps);
    }

    security = (props) => {
      const { loggedIn, appLoading, history } = props;
      if (loggedIn && !appLoading) {
        history.push(settings.redirect);
      }
    }

    render() {
      const { appLoading, loggedIn } = this.props;
      if (appLoading || loggedIn) {
        return null;
      }
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      loggedIn: getLoggedIn(state),
      appLoading: getAppLoading(state),
    };
  }

  NoAuth.propTypes = propTypes;

  return connect(mapStateToProps)(NoAuth);
};
