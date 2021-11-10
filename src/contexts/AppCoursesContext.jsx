import { createContext, useState } from 'react';
import { mockedCoursesList, mockedAuthorsList } from '../constants';
import { appRoutes } from '../constants';
import { useHistory } from 'react-router-dom';

const AppCoursesContext = createContext({});

const AppCoursesContextProvider = ({ children }) => {
	const history = useHistory();
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const addNewCourse = (course) => {
		setCourses([...courses, course]);
		history.push(appRoutes.COURSES);
	};

	const addNewAuthor = (author) => {
		setAuthors([...authors, author]);
	};

	const getCourseById = (id) => courses.find((c) => c.id === id);

	const val = {
		courses: courses,
		authors: authors,
		addNewCourse: addNewCourse,
		addNewAuthor: addNewAuthor,
		getCourseById: getCourseById,
	};

	return (
		<AppCoursesContext.Provider value={val}>
			{children}
		</AppCoursesContext.Provider>
	);
};

export { AppCoursesContext, AppCoursesContextProvider };
