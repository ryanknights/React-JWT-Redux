import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let loading = this.props.loading;

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
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Loader);