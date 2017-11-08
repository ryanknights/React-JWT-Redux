import React, { Component } from 'react';
import { connect } from 'react-redux';

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
			if (props.auth.loggedin && !props.appLoading) {
				this.props.history.push(settings.redirect);
			}				
		}
		render() {
			if (this.props.appLoading || this.props.auth.loggedin) {
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

	return connect(mapStateToProps)(NoAuth);
}