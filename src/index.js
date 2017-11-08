import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { store, history } from './store/index'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { appInit }  from './actions/init';
import axios from 'axios';
import { onSuccess, onError, beforeRequestSuccess, beforeRequestError } from './interceptors/axios';

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
