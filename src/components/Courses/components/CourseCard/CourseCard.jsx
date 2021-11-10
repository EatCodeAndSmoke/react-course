/* eslint-disable jsx-a11y/anchor-is-valid */
import {
	Button,
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';
import { getDurationText } from '../../../../helpers/pipeDuration';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../../../constants';

function CourseCard({ course }) {
	const authorNames = course.authors.map((a) => a.name).join(', ');

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

					<p className='d-flex justify-content-center align-items-center'>
						<Link to={appRoutes.COURSES + '/' + course.id}>
							<Button
								buttonColor={ButtonColor.Primary}
								outline={true}
								buttonSize={ButtonSize.Small}
								buttonText='SHOW COURSE'
							/>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
