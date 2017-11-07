import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import PageHome from './pages/home/PageHome';
import PageLogin from './pages/login/PageLogin';
import PageRegister from './pages/register/PageRegister';
import PagePosts from './pages/posts/PagePosts';

import Feedback from './Feedback';

export default class Main extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<section>
				<div className="container pt-3 pb-3">
					<Feedback />
					<Switch>
						<Route exact path='/' component={PageHome} />
						<Route exact path='/login' component={PageLogin} />
						<Route exact path='/register' component={PageRegister} />
						<Route exact path='/posts' component={PagePosts} />
					</Switch>
				</div>
			</section>
		);
	}
}