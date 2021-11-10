import { Button, ButtonColor } from '../../common/Button/Button';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppCoursesContext } from '../../contexts/AppCoursesContext';
import { appRoutes } from '../../constants';
import { getDurationText } from '../../helpers/pipeDuration';
import { useLoginCheck } from '../hoc/LoginCheckHOC/LoginCheckHOC';

const CourseInfo = () => {
	debugger;
	const { id } = useParams();
	const { getCourseById, authors } = useContext(AppCoursesContext);
	const course = getCourseById(id);
	const authorNames = course.authors
		.map((id) => authors.find((a) => a.id === id)?.name)
		.join(', ');

	return useLoginCheck(
		<div className='container-fluid'>
			<div className='row mt-5'>
				<div className='col'>
					<Link to={appRoutes.COURSES}>
						<Button
							buttonText='< Back to courses'
							buttonColor={ButtonColor.Primary}
							outline={true}
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
