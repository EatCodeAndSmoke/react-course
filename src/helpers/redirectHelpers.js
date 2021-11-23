import { useHistory } from 'react-router-dom';

import { appRoutes } from '../constants';

export const redirect = (path) => {
	const history = useHistory();
	history.push(path);
};

export const redirectToLogin = () => redirect(appRoutes.LOGIN);
