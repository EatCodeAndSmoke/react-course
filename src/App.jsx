import React from 'react';
import { Provider } from 'react-redux';

import AppRouter from './components/AppRouter/AppRouter';
import NotifyClient from './components/NotifyClient/NotifyClient';
import store from './store/index';

import 'react-notifications/lib/notifications.css';

const App = () => (
	<Provider store={store}>
		<div className='container h-100'>
			<AppRouter />
			<NotifyClient />
		</div>
	</Provider>
);

export default App;
