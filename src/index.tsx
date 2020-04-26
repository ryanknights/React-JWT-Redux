import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import axios from 'axios';
import App from './components/App';
import { store, history } from './store/index';
import appInit from './actions/init';
import {
  onSuccess,
  onError,
  beforeRequestSuccess,
  beforeRequestError,
} from './interceptors/axios';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.interceptors.request.use(beforeRequestSuccess, beforeRequestError);
axios.interceptors.response.use(onSuccess, onError);

store.dispatch(appInit());

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
