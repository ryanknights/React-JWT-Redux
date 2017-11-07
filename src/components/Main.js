import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PageHome from './pages/home/PageHome';
import PageLogin from './pages/login/PageLogin';
import PageRegister from './pages/register/PageRegister';
import PagePosts from './pages/posts/PagePosts';

import Feedback from './Feedback';
import Loader from './Loader';


import Auth from './Auth';
import NoAuth from './NoAuth';

export default class Main extends Component {
	render () {
		return (
			<section>
				<div className="container pt-3 pb-3">
					<Feedback />
					<Loader />
					<Route exact path='/login' component={NoAuth(PageLogin, {})} />
					<Route exact path='/register' component={NoAuth(PageRegister, {})} />
					<Route exact path='/' component={Auth(PageHome, {})} />
					<Route exact path='/posts' component={Auth(PagePosts, {})} />
				</div>
			</section>
		);
	}
}