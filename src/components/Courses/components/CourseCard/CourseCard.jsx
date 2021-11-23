import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import getDurationText from '../../../../helpers/pipeDuration';
import { appRoutes } from '../../../../constants';
import getCourseAuthorNames from '../../../../helpers/courseHelpers';
import { getAuthors } from '../../../../store/selectors';
import { createSetSuccessMessage } from '../../../../store/global/actionCreators';
import Button, {
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';
import { deleteCourseSuccess } from '../../../../store/courses/actionCreators';

const CourseCard = ({ course }) => {
	const dispatch = useDispatch();
	const authors = useSelector(getAuthors);
	const authorNames = getCourseAuthorNames(course, authors);

	const onDeleteClick = () => {
		dispatch(deleteCourseSuccess(course.id));
		dispatch(createSetSuccessMessage('COURSE DELETED SUCCESSFULLY'));
	};

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
							<Link to={`${appRoutes.COURSES}/${course.id}`}>
								<Button
									buttonColor={ButtonColor.Primary}
									outline
									buttonSize={ButtonSize.Small}
									buttonText='SHOW'
								/>
							</Link>
						</div>

						<div style={{ 'margin-right': '4px' }}>
							<Button
								buttonColor={ButtonColor.Secondary}
								outline
								buttonSize={ButtonSize.Small}
								buttonText='UPDATE'
							/>
						</div>

						<Button
							buttonColor={ButtonColor.Danger}
							outline
							buttonSize={ButtonSize.Small}
							buttonText='DELETE'
							onClick={onDeleteClick}
						/>
					</p>
				</div>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	course: PropTypes.instanceOf(PropTypes.any).isRequired,
};

export default CourseCard;
