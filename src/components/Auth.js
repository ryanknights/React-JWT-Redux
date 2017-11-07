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
			if (!this.props.auth.loggedin) {
				this.props.history.push(settings.redirect);
			}
		}
		componentWillUpdate() {
			if (!this.props.auth.loggedin) {
				this.props.history.push(settings.redirect);
			}		
		}
		render() {
			return <ComposedComponent {...this.props} />;
		}
	}

	function mapStateToProps(state) {
		return {
			auth: state.auth
		}
	}

	return connect(mapStateToProps)(Auth);
}