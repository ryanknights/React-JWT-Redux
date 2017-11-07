import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let loading = this.props.loader.appLoading;
		return (
			<div className="app">
				{
					(this.props.loader.appLoading)
					? <div>App Loading</div>
					: <div>
						<Loader />
						<Header />
						<Main />
					  </div>
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    loader: state.loader
  }
}

export default withRouter(connect(mapStateToProps)(App));