import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isAuthenticated } from '../../store/selectors';
import { appRoutes } from '../../constants';

const PrivateRoute = ({ component }) => {
	const isAuth = useSelector(isAuthenticated);

	return (
		<Route
			render={() =>
				isAuth ? { component } : <Redirect to={appRoutes.LOGIN} />
			}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.element.isRequired,
};

export default PrivateRoute;
