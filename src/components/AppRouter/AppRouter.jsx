import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Courses from '../Courses/Courses';
import CourseInfo from '../CourseInfo/CourseInfo';
import CourseFrom from '../CourseFrom/CourseFrom';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { appRoutes } from '../../constants';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<PrivateRoute exact path={appRoutes.HOME} component={<Courses />} />

			<PublicRoute path={appRoutes.LOGIN} component={<Login />} />

			<PublicRoute path={appRoutes.REGISTRATION} component={<Registration />} />

			<PrivateRoute exact path={appRoutes.COURSES} component={<Courses />} />

			<PrivateRoute
				exact
				path={appRoutes.CREATE_COURSE}
				requiredRole='admin'
				component={<CourseFrom />}
			/>

			<PrivateRoute
				exact
				path={appRoutes.UPDATE_COURSE}
				requiredRole='admin'
				component={<CourseFrom />}
			/>

			<PrivateRoute
				exact
				path={appRoutes.COURSE_INFO}
				component={<CourseInfo />}
			/>
		</Switch>
	</BrowserRouter>
);

export default AppRouter;
