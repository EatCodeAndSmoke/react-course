import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

import Button, { ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import CourseService from '../../services/courseService';
import CourseView from './components/CourseView';

const CourseInfo = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const [course, setCourse] = useState({
		id: '',
		title: '',
		description: '',
		duration: 0,
		authors: [],
	});

	useEffect(() => {
		const courseService = new CourseService();
		courseService.getById({
			data: id,
			onSuccess: (resp) => {
				setCourse(resp.result);
			},
			onFail: (msg) => NotificationManager.error(msg),
		});
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
