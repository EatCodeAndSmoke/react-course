import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import {
	NotificationContainer,
	NotificationManager,
} from 'react-notifications';

import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import store from './store/index';
import { retreiveUserIdentity } from './store/user/thunk';
import { readJwtToken } from './helpers/localStorageHelper';

import 'react-notifications/lib/notifications.css';

export const App = () => {
	const token = readJwtToken();
	const dispatch = useDispatch();
	const [shouldRenderApp, setShouldRenderApp] = useState(!token);

	useState(() => {
		if (token) {
			dispatch(
				retreiveUserIdentity({
					onSuccess: () => {
						setShouldRenderApp(true);
					},
					onFail: () => {
						NotificationManager.error('UNABLE TO LOAD USER IDENTITY');
					},
				})
			);
		}
	}, [token, dispatch]);

	return shouldRenderApp ? (
		<div className='container h-100'>
			<Header />
			<AppRouter />
			<NotificationContainer />
		</div>
	) : (
		<NotificationContainer />
	);
};

export const AppWrapper = () => (
	<Provider store={store}>
		<App />
	</Provider>
);
