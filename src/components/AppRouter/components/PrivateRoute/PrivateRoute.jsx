import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { isAuthenticated, getUserRole } from '../../../../store/selectors';
import { appRoutes } from '../../../../constants';

const PrivateRoute = ({ component, requiredRole, ...rest }) => {
	const isAuth = useSelector(isAuthenticated);
	const userRole = useSelector(getUserRole);

	return (
		<Route
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...rest}
			render={() =>
				isAuth && (!requiredRole || requiredRole === userRole) ? (
					component
				) : (
					<Redirect
						to={{
							pathname: appRoutes.LOGIN,
						}}
					/>
				)
			}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.element.isRequired,
	requiredRole: PropTypes.string,
};

PrivateRoute.defaultProps = {
	requiredRole: null,
};

export default PrivateRoute;
