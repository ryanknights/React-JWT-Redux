import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLoading, getAppLoading } from '../reducers/loader';

class Loader extends Component {
	render() {
		if (this.props.appLoading) {
			return (
				<div className="loader__app-loading">
					App Loading...
				</div>
			);
		} else if (this.props.loading) {
			return (
				<div className="loader__loading">
					Loading...
				</div>
			)
		} else {
			return null;
		}		
	}
}

function mapStateToProps(state) {
  return {
    loading: getLoading(state),
    appLoading: getAppLoading(state)
  }
}

export default connect(mapStateToProps)(Loader);