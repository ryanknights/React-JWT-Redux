import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';

function App() {
  return (
    <div className="app">
      <Loader />
      <Header />
      <Main />
    </div>
  );
}

export default withRouter(App);
