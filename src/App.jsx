import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { AppCoursesContextProvider } from './contexts/AppCoursesContext';
import { AppUserContextProvider } from './contexts/AppUserContext';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { appRoutes } from './constants';

const App = () => {
	return (
		<div className='container h-100'>
			<BrowserRouter>
				<Switch>
					<AppUserContextProvider>
						<Header />

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
			<NotificationContainer />
		</div>
	);
};

export default App;
