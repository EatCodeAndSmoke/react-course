import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { appRoutes } from '../../../constants';

export const useLoginCheck = (component) => {
	const history = useHistory();

	useEffect(() => {
		const isAuthenticated = localStorage.getItem('auth');
		if (!isAuthenticated) history.push(appRoutes.LOGIN);
	});

	return component;
};
