import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button, { ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import { getCourses, isAdmin } from '../../store/selectors';
import { loadCourses } from '../../store/courses/thunk';
import { loadAuthors } from '../../store/authors/thunk';

const Courses = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const courses = useSelector(getCourses);
	const isUserAdmin = useSelector(isAdmin);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredCourses, setFilterCourses] = useState(courses);
	const createCourseClickHandler = () => history.push(appRoutes.CREATE_COURSE);

	useEffect(() => {
		const loadCoursesReq = {
			onFail: (msg) => {
				NotificationManager.error(`FAILED TO LOAD COURSES: ${msg}`);
			},
		};

		dispatch(loadCourses(loadCoursesReq));
	}, [dispatch]);

	useEffect(() => {
		const loadAuthorsReq = {
			onFail: (msg) => {
				NotificationManager.error(`FAILED TO LOAD AUTHORS: ${msg}`);
			},
		};

		dispatch(loadAuthors(loadAuthorsReq));
	}, [dispatch]);

	useEffect(() => {
		setFilterCourses(
			courses.filter(
				(c) =>
					!searchTerm ||
					c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					c.id.includes(searchTerm)
			)
		);
	}, [searchTerm, courses]);

	const courseCards = filteredCourses.map((course) => (
		<CourseCard key={course.id} course={course} />
	));

	return (
		<div data-testid='courses' className='d-flex flex-column'>
			<div className='d-flex justify-content-between mt-3'>
				<SearchBar
					onTextChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
				/>
				{isUserAdmin && (
					<Button
						testId='courses-addnewcoursebtn'
						buttonColor={ButtonColor.Success}
						outline={false}
						buttonText='ADD NEW COURSE'
						onClick={createCourseClickHandler}
					/>
				)}
			</div>

			{courseCards}
		</div>
	);
};

export default Courses;
