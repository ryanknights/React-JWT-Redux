import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout, redirectToLogin } from '../actions/auth';
import { setDelayedFeedback } from '../actions/feedback';
import { getLoggedIn, getUser, getUserIsAdmin } from '../reducers/auth';

const propTypes = {
  logout: PropTypes.func.isRequired,
  setDelayedFeedback: PropTypes.func.isRequired,
  redirectToLogin: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  isUserAdmin: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.bool,
  ]).isRequired,
};

class Header extends Component {
  onClickLogout(event) {
    // eslint-disable-next-line no-shadow
    const { logout, setDelayedFeedback, redirectToLogin } = this.props;
    event.preventDefault();
    logout();
    setDelayedFeedback({ message: 'Successfully logged out', type: 'info' });
    redirectToLogin();
  }

  render() {
    const { loggedIn, isUserAdmin, user } = this.props;
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">React JWT</Link>
            <div className="navbar-collapse" id="navbar">
              { loggedIn && (
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/posts" className="nav-link">Posts</Link>
                  </li>
                  { isUserAdmin && (
                    <li className="nav-item active">
                      <Link to="/admin" className="nav-link">Admin</Link>
                    </li>
                  )}
                </ul>
              )}
              { (loggedIn) ? (
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    Logged in as
                    <strong>{user.username}</strong>
                    <button type="button" onClick={(event) => this.onClickLogout(event)}>
                      <em>(Logout)</em>
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <Link to="/login" className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout,
    setDelayedFeedback,
    redirectToLogin,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    loggedIn: getLoggedIn(state),
    user: getUser(state),
    isUserAdmin: getUserIsAdmin(state),
  };
}

Header.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
