import React, { useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Courses from '../Courses/Courses';
import CourseInfo from '../CourseInfo/CourseInfo';
import Header from '../Header/Header';
import CourseFrom from '../CourseFrom/CourseFrom';
import { appRoutes } from '../../constants';
import { isAuthenticated } from '../../store/selectors';
import store from '../../store/index';
import { readJwtToken } from '../../helpers/localStorageHelper';
import { retreiveUserIdentity } from '../../store/user/thunk';

const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const token = readJwtToken();
		if (token) {
			dispatch(retreiveUserIdentity({}));
		}
	}, [dispatch]);

	const isAuth = useSelector(isAuthenticated);

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />

				<Switch>
					<Route
						exact
						path={appRoutes.HOME}
						render={() => <Redirect to={appRoutes.COURSES} />}
					/>

					<Route path={appRoutes.LOGIN}>
						{!isAuth ? <Login /> : <Redirect to={appRoutes.HOME} />}
					</Route>

					<Route path={appRoutes.REGISTRATION}>
						<Registration />
					</Route>

					<Route exact path={appRoutes.COURSES}>
						{isAuth ? <Courses /> : <Redirect to={appRoutes.LOGIN} />}
					</Route>

					<Route exact path={appRoutes.CREATE_COURSE}>
						{isAuth ? <CourseFrom /> : <Redirect to={appRoutes.LOGIN} />}
					</Route>

					<Route exact path={appRoutes.UPDATE_COURSE}>
						{isAuth ? <CourseFrom /> : <Redirect to={appRoutes.LOGIN} />}
					</Route>

					<Route exact path={appRoutes.COURSE_INFO}>
						{isAuth ? <CourseInfo /> : <Redirect to={appRoutes.LOGIN} />}
					</Route>
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

export default AppRouter;
