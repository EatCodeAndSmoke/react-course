import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button, { ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import {
	getAuthors,
	getCourses,
	isInitialCoursesLoaded,
	isInitialAuthorsLoaded,
} from '../../store/selectors';
import { createSetErrorMessage } from '../../store/global/actionCreators';
import {
	sendgetAllAuthorsRequest,
	sendgetAllCoursesRequest,
} from '../../services';
import {
	createLoadAuthors,
	createLoadAuthorsFail,
	createLoadAuthorsSuccess,
	setInitialAuthorsLoaded,
} from '../../store/authors/actionCreators';
import {
	createLoadCourses,
	createLoadCoursesFail,
	createLoadCoursesSuccess,
	setInitialCoursesLoaded,
} from '../../store/courses/actionCreators';

const Courses = () => {
	const dispatch = useDispatch();
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const initCoursesLoaded = useSelector(isInitialCoursesLoaded);
	const initAuthorsLoaded = useSelector(isInitialAuthorsLoaded);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredCourses, setFilterCourses] = useState(
		courses.map((c) => <CourseCard key={c.id} course={c} />)
	);

	useEffect(() => {
		// load courses
		if (!initCoursesLoaded) {
			dispatch(setInitialCoursesLoaded());

			sendgetAllCoursesRequest(
				() => {
					dispatch(createLoadCourses());
				},

				(loadedCourses) => {
					dispatch(createLoadCoursesSuccess(loadedCourses.result));
				},

				(errorMessage) => {
					dispatch(createLoadCoursesFail());
					createSetErrorMessage(errorMessage);
				}
			);
		}
	}, []); // why it yells ?

	useEffect(() => {
		// load authors

		if (!initAuthorsLoaded) {
			dispatch(setInitialAuthorsLoaded());

			sendgetAllAuthorsRequest(
				() => {
					dispatch(createLoadAuthors());
				},

				(loadedAuthors) => {
					dispatch(createLoadAuthorsSuccess(loadedAuthors.result));
				},

				(errorMessage) => {
					dispatch(createLoadAuthorsFail());
					createSetErrorMessage(errorMessage);
				}
			);
		}
	}, []);

	useEffect(() => {
		setFilterCourses(
			courses
				.filter(
					(c) =>
						!searchTerm ||
						c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
						c.id.includes(searchTerm)
				)
				.map((course) => <CourseCard key={course.id} course={course} />)
		);
	}, [searchTerm, courses, authors]);

	return (
		<div className='d-flex flex-column'>
			<div className='d-flex justify-content-between mt-3'>
				<SearchBar onTextChange={(e) => setSearchTerm(e.target.value)} />
				<Link to={{ pathname: appRoutes.CREATE_COURSE }}>
					<Button
						buttonColor={ButtonColor.Success}
						outline={false}
						buttonText='ADD NEW COURSE'
					/>
				</Link>
			</div>

			{filteredCourses}
		</div>
	);
};

export default Courses;
