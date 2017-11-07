import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/index'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { appInit }  from './actions/init';
import axios from 'axios';
import { onSuccess, onError, beforeRequestSuccess, beforeRequestError } from './interceptors/axios';

axios.interceptors.request.use(beforeRequestSuccess, beforeRequestError);
axios.interceptors.response.use(onSuccess, onError);

store.dispatch(appInit());

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));
