import React from 'react';
import { Provider } from 'react-redux';
import { NotificationContainer } from 'react-notifications';

import AppRouter from './components/AppRouter/AppRouter';
import store from './store/index';

import 'react-notifications/lib/notifications.css';

const App = () => (
	<Provider store={store}>
		<div className='container h-100'>
			<AppRouter />
			<NotificationContainer />
		</div>
	</Provider>
);

export default App;
