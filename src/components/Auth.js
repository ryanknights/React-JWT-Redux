import React, { Component } from 'react';
import { connect } from 'react-redux';

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
			if (!props.appLoading && !props.auth.loggedin) {
				this.redirect();
			}

			if (settings.admin) { 
				// If app is not loading, user is logged in and user is not an admin
				if (!props.appLoading && props.auth.loggedin && !props.auth.user.isAdmin) {
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
				|| !this.props.auth.loggedin // User is not logged in
				|| (settings.admin && !this.props.auth.user.isAdmin) // Admin route and user is not an admin
			) {
				return null;
			} else {
				return <ComposedComponent {...this.props} />;
			}
		}
	}

	function mapStateToProps(state) {
		return {
			auth: state.auth,
			appLoading: state.loader.appLoading
		}
	}

	return connect(mapStateToProps)(Auth);
}