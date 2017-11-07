import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {
	render() {
		let loading = this.props.loader.loading;

		if (!loading) {
			return null;
		} else {
			return (
				<div className="loading">
					Loading...
				</div>
			);
		}		
	}
}

function mapStateToProps(state) {
  return {
    loader: state.loader
  }
}

export default connect(mapStateToProps)(Loader);