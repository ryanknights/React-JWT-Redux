import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAppLoading } from '../reducers/loader';
import { getLoggedIn, getUserIsAdmin } from '../reducers/auth'; 

export default (ComposedComponent, config) => {
	const settings = {
		...{
			redirect: '/login',
			admin: false
		},
		...config
	};

	class Auth extends Component {
		componentWillMount() {
			this.security(this.props);
		}
		componentWillReceiveProps(nextProps) {				
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
			this.props.history.push(settings.redirect);
		}
		render() {
			if (
				// Dont display component if...
				this.props.appLoading // App is initially loading
				|| !this.props.loggedIn // User is not logged in
				|| (settings.admin && !this.props.isAdmin) // Admin route and user is not an admin
			) {
				return null;
			} else {
				return <ComposedComponent {...this.props} />;
			}
		}
	}

	function mapStateToProps(state) {
		return {
			loggedIn: getLoggedIn(state),
			isAdmin: getUserIsAdmin(state),
			appLoading: getAppLoading(state)
		}
	}

	return connect(mapStateToProps)(Auth);
}