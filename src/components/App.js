import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Loader />
				<Header />
				<Main />
			</div>
		);
	}
}