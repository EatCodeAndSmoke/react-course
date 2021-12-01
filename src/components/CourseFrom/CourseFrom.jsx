import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import CourseService from '../../services/courseService';
import { createUserLoggedOut } from '../../store/user/actionCreators';
import TextInput, { TextInputType } from '../../common/TextInput/TextInput';
import TextArea from '../../common/TextArea/TextArea';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import Authors, { AuthorsMode } from './components/Authors/Authors';
import getCurrentDate from '../../helpers/dateGenerator';
import getDurationText from '../../helpers/pipeDuration';
import onInputChangeHandler from '../../helpers/formInputHandlers';
import { getAuthors } from '../../store/selectors';
import { appRoutes } from '../../constants';
import { addCourse, updateCourse } from '../../store/courses/thunk';
import Button, { ButtonColor } from '../../common/Button/Button';

const CourseFrom = () => {
	const { id } = useParams();
	const isAddMode = !id;
	const history = useHistory();
	const dispatch = useDispatch();

	const [course, setCourse] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: getCurrentDate(),
		duration: 0,
		authors: [],
	});

	useEffect(() => {
		if (!isAddMode) {
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
		}
	}, [id, dispatch, isAddMode]);

	const [authorsWithSelection, setAuthorsWithSelection] = useState([]);
	const authors = useSelector(getAuthors);

	useEffect(() => {
		setAuthorsWithSelection(
			authors.map((a) => ({
				...a,
				selected: course.authors.some((authId) => authId === a.id),
			}))
		);
	}, [authors, course.authors]);

	console.log('STATE ', authorsWithSelection);

	const onAuthorSelectionChanged = (authorId) => {
		const author = authorsWithSelection.find((a) => a.id === authorId);
		author.selected = !author.selected;
		setAuthorsWithSelection([...authorsWithSelection]);
	};

	const inputChangeHandler = onInputChangeHandler(course, setCourse);
	const [addOrUpdateRequested, setAddOrUpdateRequested] = useState(false);

	const mapNewCourse = () => {
		const selAuths = authorsWithSelection.filter((a) => a.selected);
		course.id = crypto.randomUUID();
		course.authors = [...selAuths.map((a) => a.id)];
		return course;
	};

	const req = {
		course: mapNewCourse(),
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

	const addOrUpdateCourseHandler = () =>
		isAddMode ? dispatch(addCourse(req)) : dispatch(updateCourse(req));

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
				</div>

				<div className='col-6'>
					<Authors
						authorsMode={AuthorsMode.NotSelectedAuthorsList}
						authors={authorsWithSelection}
						onAuthorBtnClick={onAuthorSelectionChanged}
					/>
				</div>
			</div>

			<div className='form-group row mt-3'>
				<div className='col-6'>
					<h5 className='text-center mb-3'>Duration</h5>
					<input
						type='number'
						name='duration'
						id=''
						min='0'
						onChange={inputChangeHandler}
						value={course.duration}
					/>
					<h3 className='mt-3'>
						<p>
							Duration: <strong>{getDurationText(course.duration)}</strong>
						</p>
					</h3>
				</div>

				<div className='col-6'>
					<Authors
						authorsMode={AuthorsMode.SelectedAuthorList}
						authors={authorsWithSelection}
						onAuthorBtnClick={onAuthorSelectionChanged}
					/>
				</div>
			</div>
		</form>
	);
};

export default CourseFrom;
