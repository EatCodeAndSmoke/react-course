import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button, { ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import { getCourses } from '../../store/selectors';
import { loadCourses } from '../../store/courses/thunk';
import { loadAuthors } from '../../store/authors/thunk';

const Courses = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		const loadCoursesReq = {
			onSuccess: () => {
				const loadAuthorsReq = {
					onFail: (msg) => {
						NotificationManager.error(msg);
					},
				};

				dispatch(loadAuthors(loadAuthorsReq));
			},
			onFail: (msg) => {
				NotificationManager.error(msg);
			},
		};

		dispatch(loadCourses(loadCoursesReq));
	}, [dispatch]); // why is it loading twice ?

	const courses = useSelector(getCourses);

	const [searchTerm, setSearchTerm] = useState('');
	const [filteredCourses, setFilterCourses] = useState(courses);

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

	const createCourseClickHandler = () => history.push(appRoutes.CREATE_COURSE);

	return (
		<div className='d-flex flex-column'>
			<div className='d-flex justify-content-between mt-3'>
				<SearchBar onTextChange={(e) => setSearchTerm(e.target.value)} />
				<Button
					buttonColor={ButtonColor.Success}
					outline={false}
					buttonText='ADD NEW COURSE'
					onClick={createCourseClickHandler}
				/>
			</div>

			{courseCards}
		</div>
	);
};

export default Courses;
