import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

import getDurationText from '../../../../helpers/pipeDuration';
import { appRoutes } from '../../../../constants';
import getCourseAuthorNames from '../../../../helpers/courseHelpers';
import { getAuthors } from '../../../../store/selectors';
import { deleteCourse } from '../../../../store/courses/thunk';
import Button, {
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';

const CourseCard = ({ course }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const authors = useSelector(getAuthors);
	const authorNames = getCourseAuthorNames(course, authors);
	const [deleteCourseRequested, setDeleteCourseRequested] = useState(false);

	const deleteReq = {
		courseId: course.id,
		onStarted: () => setDeleteCourseRequested(true),
		onSuccess: () => {
			setDeleteCourseRequested(false);
			NotificationManager.success('COURSE DELETED');
		},
		onFail: (msg) => {
			setDeleteCourseRequested(false);
			NotificationManager.error(msg);
		},
	};

	const onDeleteClick = () => dispatch(deleteCourse(deleteReq));

	const onUpdateClick = () =>
		history.push(appRoutes.GET_UPDATE_COURSE(course.id));

	const onShowCourseClick = () =>
		history.push(appRoutes.GET_COURSE_INFO(course.id));

	return (
		<div className='card mt-3 p-3'>
			<div className='row'>
				<div className='card-body col-7'>
					<h5 className='card-title'>{course.title}</h5>
					<p className='card-text'>{course.description}</p>
				</div>

				<div className='col-5'>
					<p>
						<span>
							<strong>Authors: </strong>
						</span>
						<span>{authorNames}</span>
					</p>

					<p>
						<span>
							<strong>Duration: </strong>
						</span>
						<span>{getDurationText(course.duration)}</span>
					</p>

					<p>
						<span>
							<strong>Created: </strong>
						</span>
						<span>{course.creationDate}</span>
					</p>

					<p className='d-flex justify-content-start align-items-center'>
						<div style={{ 'margin-right': '4px' }}>
							<Button
								buttonColor={ButtonColor.Primary}
								outline
								buttonSize={ButtonSize.Small}
								buttonText='SHOW'
								onClick={onShowCourseClick}
							/>
						</div>

						<div style={{ 'margin-right': '4px' }}>
							<Button
								buttonColor={ButtonColor.Secondary}
								outline
								buttonSize={ButtonSize.Small}
								buttonText='UPDATE'
								onClick={onUpdateClick}
							/>
						</div>

						<Button
							buttonColor={ButtonColor.Danger}
							outline
							buttonSize={ButtonSize.Small}
							buttonText='DELETE'
							onClick={onDeleteClick}
							showLoader={deleteCourseRequested}
						/>
					</p>
				</div>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	course: PropTypes.exact({
		id: PropTypes.string,
		title: PropTypes.string,
		duration: PropTypes.number,
		description: PropTypes.string,
		creationDate: PropTypes.string,
	}).isRequired,
};

export default CourseCard;
