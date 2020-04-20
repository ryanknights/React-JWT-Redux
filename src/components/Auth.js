import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAppLoading } from '../reducers/loader';
import { getLoggedIn, getUserIsAdmin } from '../reducers/auth';

const propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  appLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};

export default (ComposedComponent, config) => {
  const settings = {
    ...{
      redirect: '/login',
      admin: false,
    },
    ...config,
  };

  class Auth extends Component {
    componentDidMount() {
      this.security(this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      this.security(nextProps);
    }

    security(props) {
      // If app is not loading and user is not logged in
      if (!props.appLoading && !props.loggedIn) {
        this.redirect();
      }

      if (settings.admin) {
        // If app is not loading, user is logged in and user is not an admin
        if (!props.appLoading && props.loggedIn && !props.isAdmin) {
          this.redirect();
        }
      }
    }

    redirect() {
      const { history } = this.props;
      history.push(settings.redirect);
    }

    render() {
      const { appLoading, loggedIn, isAdmin } = this.props;
      if (
        // Dont display component if...
        appLoading // App is initially loading
        || !loggedIn // User is not logged in
        || (settings.admin && !isAdmin) // Admin route and user is not an admin
      ) {
        return null;
      }
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      loggedIn: getLoggedIn(state),
      isAdmin: getUserIsAdmin(state),
      appLoading: getAppLoading(state),
    };
  }

  Auth.propTypes = propTypes;

  return connect(mapStateToProps)(Auth);
};
