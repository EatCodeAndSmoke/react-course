import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';

import Button, { ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import getDurationText from '../../helpers/pipeDuration';
import { getAuthors, getCourses } from '../../store/selectors';
import getCourseAuthorNames from '../../helpers/courseHelpers';
import { createSetErrorMessage } from '../../store/global/actionCreators';

const CourseInfo = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const course = courses.find((c) => c.id === id);
	if (!course) {
		dispatch(createSetErrorMessage('COURSE NOT FOUND'));
		history.push(appRoutes.HOME);
		return null;
	}

	const authorNames = getCourseAuthorNames(course, authors);

	return (
		<div className='container-fluid'>
			<div className='row mt-5'>
				<div className='col'>
					<Link to={appRoutes.COURSES}>
						<Button
							buttonText='< Back to courses'
							buttonColor={ButtonColor.Primary}
							outline
						/>
					</Link>
				</div>
			</div>

			<div className='row mt-5'>
				<div className='col-8'>
					<h1 className='text-center'>{course.title}</h1>
					<p>{course.description}</p>
				</div>

				<div className='col-4 d-flex flex-column align-items-start'>
					<p>
						<strong>ID: </strong> {course.id}
					</p>
					<p>
						<strong>Duration: </strong> {getDurationText(course.duration)}
					</p>
					<p>
						<strong>Created: </strong> {course.creationDate}
					</p>
					<p>
						<strong>Authors: </strong> {authorNames}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
