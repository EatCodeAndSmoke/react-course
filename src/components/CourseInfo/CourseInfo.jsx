import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

import Button, { ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import CourseService from '../../services/courseService';
import CourseView from './components/CourseView';
import { createUserLoggedOut } from '../../store/user/actionCreators';

const CourseInfo = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const [course, setCourse] = useState(null);

	useEffect(() => {
		const fetchCourse = async () => {
			const courseService = new CourseService();
			const { status, data } = await courseService.getById(id);
			if (status === 200) {
				setCourse(data.result);
			} else if (status === 401) {
				dispatch(createUserLoggedOut());
			} else if (status === 404) {
				NotificationManager.error(data.result);
			} else {
				NotificationManager.error('SOMETHING WENT WRONG');
			}
		};

		fetchCourse();
	}, [id, dispatch]);

	const onBackToCoursesClick = () => history.push(appRoutes.COURSES);

	return (
		<div className='container-fluid'>
			<div className='row mt-5'>
				<div className='col'>
					<Button
						buttonText='< Back to courses'
						buttonColor={ButtonColor.Primary}
						outline
						onClick={onBackToCoursesClick}
					/>
				</div>
			</div>

			{course && <CourseView course={course} />}
		</div>
	);
};

export default CourseInfo;
