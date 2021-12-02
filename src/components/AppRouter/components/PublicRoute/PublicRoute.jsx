import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../../../../store/selectors';
import { appRoutes } from '../../../../constants';

const PublicRoute = ({ component, ...rest }) => {
	const isAuth = useSelector(isAuthenticated);
	return (
		<Route
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...rest}
			render={() =>
				!isAuth ? (
					component
				) : (
					<Redirect
						to={{
							pathname: appRoutes.HOME,
						}}
					/>
				)
			}
		/>
	);
};

PublicRoute.propTypes = {
	component: PropTypes.element.isRequired,
};

export default PublicRoute;
