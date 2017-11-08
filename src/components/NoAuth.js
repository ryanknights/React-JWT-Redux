import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAppLoading } from '../reducers/loader';
import { getLoggedIn } from '../reducers/auth'; 

export default (ComposedComponent, config) => {
	const settings = {
		...{
			redirect: '/',
			admin: false
		},
		...config
	};

	class NoAuth extends Component {
		componentWillMount() {
			this.security(this.props);
		}
		componentWillReceiveProps(nextProps) {				
			this.security(nextProps);		
		}
		security(props) {
			if (props.loggedIn && !props.appLoading) {
				this.props.history.push(settings.redirect);
			}				
		}
		render() {
			if (this.props.appLoading || this.props.loggedIn) {
				return null;
			} else {
				return <ComposedComponent {...this.props} />;
			}
		}
	}

	function mapStateToProps(state) {
		return {
			loggedIn: getLoggedIn(state),
			appLoading: getAppLoading(state)
		}
	}

	return connect(mapStateToProps)(NoAuth);
}