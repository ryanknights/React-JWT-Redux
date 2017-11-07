import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';

class App extends Component {
	render() {
		return (
			<div className="app">
				{
					(this.props.loader.appLoading)
					? <div>App Loading</div>
					: <div>
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