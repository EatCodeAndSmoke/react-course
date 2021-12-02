import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import getCourseAuthorNames from '../../../helpers/courseHelpers';
import getDurationText from '../../../helpers/pipeDuration';
import { getAuthors } from '../../../store/selectors';

const CourseView = ({ course }) => {
	const authors = useSelector(getAuthors);
	const authorNames = getCourseAuthorNames(course, authors);

	return (
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
	);
};

CourseView.propTypes = {
	course: PropTypes.exact({
		id: PropTypes.string,
		title: PropTypes.string,
		duration: PropTypes.number,
		description: PropTypes.string,
		creationDate: PropTypes.string,
		authors: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};

export default CourseView;
