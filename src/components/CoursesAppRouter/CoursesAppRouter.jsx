import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Registration from '../Registration/Registration';
import CourseInfo from '../CourseInfo/CourseInfo';
import Login from '../Login/Login';
import CreateCourse from '../CreateCourse/CreateCourse';
import { appRoutes } from '../../constants';
import { AppCoursesContextProvider } from '../../contexts/AppCoursesContext';
import { AppUserContextProvider } from '../../contexts/AppUserContext';

const CoursesAppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<AppUserContextProvider>
					<Route
						exact
						path={appRoutes.HOME}
						render={() => <Redirect to={appRoutes.COURSES} />}
					/>
					<Route path={appRoutes.LOGIN}>
						<Login />
					</Route>

					<Route path={appRoutes.REGISTRATION}>
						<Registration />
					</Route>

					<AppCoursesContextProvider>
						<Route exact path={appRoutes.COURSES}>
							<Courses />
						</Route>

						<Route exact path={appRoutes.COURSE_INFO}>
							<CourseInfo />
						</Route>

						<Route exact path={appRoutes.CREATE_COURSE}>
							<CreateCourse />
						</Route>
					</AppCoursesContextProvider>
				</AppUserContextProvider>
			</Switch>
		</BrowserRouter>
	);
};

export default CoursesAppRouter;
