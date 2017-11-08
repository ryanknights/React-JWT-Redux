import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {
	render() {
		let loader = this.props.loader;

		if (loader.appLoading) {
			return (
				<div className="loader__app-loading">
					App Loading...
				</div>
			);
		} else if (loader.loading) {
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
    loader: state.loader
  }
}

export default connect(mapStateToProps)(Loader);