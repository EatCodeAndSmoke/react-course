import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import CourseService from '../../services/courseService';
import TextInput, { TextInputType } from '../../common/TextInput/TextInput';
import TextArea from '../../common/TextArea/TextArea';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import AuthorsList from './components/AuthorsList/AuthorsList';
import getCurrentDate from '../../helpers/dateGenerator';
import getDurationText from '../../helpers/pipeDuration';
import onInputChangeHandler from '../../helpers/formInputHandlers';
import { appRoutes } from '../../constants';
import { addCourse, updateCourse } from '../../store/courses/thunk';
import Button, { ButtonColor } from '../../common/Button/Button';

const CourseFrom = () => {
	const pathName = window.location.pathname;
	const { id } = useParams();
	const isAddMode = pathName === appRoutes.CREATE_COURSE;
	const history = useHistory();
	const dispatch = useDispatch();
	const [courseRetreived, setCourseRetreived] = useState(false);
	const [addOrUpdateRequested, setAddOrUpdateRequested] = useState(false);

	const [course, setCourse] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: getCurrentDate(),
		duration: 0,
		authors: [],
	});

	const inputChangeHandler = onInputChangeHandler(course, setCourse);

	useEffect(() => {
		if (!isAddMode && !courseRetreived) {
			const courseService = new CourseService();
			courseService.getById({
				data: id,
				onSuccess: (resp) => {
					setCourse(resp.result);
					setCourseRetreived(true);
				},
				onFail: (msg) => NotificationManager.error(msg),
			});
		}
	}, [id, dispatch, isAddMode, courseRetreived, course.authors]);

	const onAuthorSelectionChanged = (authorId, selectionState) => {
		if (selectionState) {
			course.authors = [...course.authors, authorId];
			setCourse({ ...course });
		} else {
			course.authors = course.authors.filter((a) => a !== authorId);
			setCourse({ ...course });
		}
	};

	const req = {
		data: course,
		onStarted: () => setAddOrUpdateRequested(true),
		onSuccess: () => {
			setAddOrUpdateRequested(false);
			const msg = `COURSE ${isAddMode ? 'ADDED' : 'UPDATED'}`;
			NotificationManager.success(msg);
			history.push(appRoutes.COURSES);
		},
		onFail: (msg) => {
			setAddOrUpdateRequested(false);
			NotificationManager.error(msg);
		},
	};

	const addOrUpdateCourseHandler = (e) => {
		e.preventDefault();
		if (isAddMode) dispatch(addCourse(req));
		else dispatch(updateCourse(req));
	};

	return (
		<form onSubmit={addOrUpdateCourseHandler}>
			<div className='form-group row mt-3'>
				<div className='col-6'>
					<TextInput
						name='title'
						textInputType={TextInputType.Text}
						placeholder='ENTER COURSE TITLE'
						onTextChange={inputChangeHandler}
						value={course.title}
					/>
				</div>
				<div className='col-6 d-flex justify-content-end'>
					<Button
						buttonText={isAddMode ? 'ADD COURSE' : 'UPDATE COURSE'}
						buttonColor={isAddMode ? ButtonColor.Primary : ButtonColor.Danger}
						isSubmit
						showLoader={addOrUpdateRequested}
					/>
				</div>
			</div>

			<div className='form-group row mt-3'>
				<div className='col'>
					<TextArea
						name='description'
						placeholder='ENTER COURSE DESCRIPTION'
						onTextChange={inputChangeHandler}
						value={course.description}
					/>
				</div>
			</div>

			<div className='form-group row mt-3'>
				<div className='col-6'>
					<CreateAuthor />

					<div className='mt-5'>
						<h5 className='text-center mb-3'>Duration</h5>
						<div className='mt-3 '>
							<input
								className='form-control'
								type='number'
								name='duration'
								id=''
								min='0'
								onChange={inputChangeHandler}
								value={course.duration}
							/>
							<h4 className='text-center'>
								Duration: <strong>{getDurationText(course.duration)}</strong>
							</h4>
						</div>
					</div>
				</div>

				<div className='col-6'>
					<AuthorsList
						courseAuthors={course.authors}
						onAuthorBtnClick={onAuthorSelectionChanged}
					/>
				</div>
			</div>
		</form>
	);
};

export default CourseFrom;
