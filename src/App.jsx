import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Courses from './components/Courses/Courses';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { appRoutes, mockedCoursesList, mockedAuthorsList } from './constants';
import React, { useState } from 'react';

const App = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const onNewCourseAdded = (course) => {
		setCourses([...courses, course]);
	};

	const onNewAuthorAdded = (author) => {
		debugger;
		setAuthors([...authors, author]);
	};

	return (
		<div className={'container'}>
			<Header />

			<BrowserRouter>
				<Switch>
					<Route exact path={appRoutes.HOME}>
						<Courses courses={courses} authors={authors} />
					</Route>

					<Route path={appRoutes.CREATE_COURSE}>
						<CreateCourse
							allAuthors={authors}
							onNewCourseAdded={onNewCourseAdded}
							onNewAuthorAdded={onNewAuthorAdded}
						/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
