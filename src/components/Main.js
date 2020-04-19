import React from 'react';
import { Route } from 'react-router-dom';

import PageHome from './pages/home/PageHome';
import PageLogin from './pages/login/PageLogin';
import PageRegister from './pages/register/PageRegister';
import PagePosts from './pages/posts/PagePosts';
import PageAdmin from './pages/admin/PageAdmin';

import Feedback from './Feedback';

import Auth from './Auth';
import NoAuth from './NoAuth';

function Main() {
  return (
    <section>
      <div className="container pt-3 pb-3">
        <Feedback />
        <Route exact path="/login" component={NoAuth(PageLogin, {})} />
        <Route exact path="/register" component={NoAuth(PageRegister, {})} />
        <Route exact path="/" component={Auth(PageHome, {})} />
        <Route exact path="/posts" component={Auth(PagePosts, {})} />
        <Route exact path="/admin" component={Auth(PageAdmin, { admin: true })} />
      </div>
    </section>
  );
}

export default Main;
