import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import TextInput, { TextInputType } from '../../common/TextInput/TextInput';
import TextArea from '../../common/TextArea/TextArea';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import Authors, { AuthorsMode } from './components/Authors/Authors';
import getCurrentDate from '../../helpers/dateGenerator';
import getDurationText from '../../helpers/pipeDuration';
import onInputChangeHandler from '../../helpers/formInputHandlers';
import { getAuthors } from '../../store/selectors';
import { appRoutes } from '../../constants';
import { createAuthorSuccess } from '../../store/authors/actionCreators';
import { createCourseSuccess } from '../../store/courses/actionCreators';

const CreateCourse = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const authors = useSelector(getAuthors);

	const [newCourse, setNewCourse] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: getCurrentDate(),
		duration: 0,
		authors: [],
	});

	const inputChangeHandler = onInputChangeHandler(newCourse, setNewCourse);

	const authorsWithSelectedState = authors.map((a) => ({
		...a,
		selected: false,
	}));

	const [localAllAuthors, setLocalAllAuthors] = useState(
		authorsWithSelectedState
	);

	const onAuthorSelectionChanged = (authorId) => {
		const author = localAllAuthors.find((a) => a.id === authorId);
		author.selected = !author.selected;
		setLocalAllAuthors([...localAllAuthors]);
	};

	const onAuthorAdded = (author) => {
		dispatch(createAuthorSuccess(author));
		setLocalAllAuthors([...localAllAuthors, { ...author, selected: false }]);
	};

	const onCourseAdded = () => {
		const selectedAuthors = localAllAuthors.filter((a) => a.selected);
		newCourse.id = crypto.randomUUID();
		newCourse.authors = [...selectedAuthors.map((a) => a.id)];
		dispatch(createCourseSuccess(newCourse));
		history.push(appRoutes.COURSES);
	};

	return (
		<form onSubmit={onCourseAdded}>
			<div className='form-group row mt-3'>
				<div className='col-6'>
					<TextInput
						name='title'
						textInputType={TextInputType.Text}
						placeholder='ENTER COURSE TITLE'
						onTextChange={inputChangeHandler}
					/>
				</div>
				<div className='col-6 d-flex justify-content-end'>
					<input
						type='submit'
						value='CREATE COURSE'
						className='btn btn-success'
					/>
				</div>
			</div>

			<div className='form-group row mt-3'>
				<div className='col'>
					<TextArea
						name='description'
						placeholder='ENTER COURSE DESCRIPTION'
						onTextChange={inputChangeHandler}
					/>
				</div>
			</div>

			<div className='form-group row mt-3'>
				<div className='col-6'>
					<CreateAuthor onCreateAuthorClick={onAuthorAdded} />
				</div>

				<div className='col-6'>
					<Authors
						authorsMode={AuthorsMode.NotSelectedAuthorsList}
						authors={localAllAuthors}
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
						onChange={(e) =>
							setNewCourse({ ...newCourse, duration: +e.target.value })
						}
					/>
					<h3 className='mt-3'>
						<p>
							Duration: <strong>{getDurationText(newCourse.duration)}</strong>
						</p>
					</h3>
				</div>

				<div className='col-6'>
					<Authors
						authorsMode={AuthorsMode.SelectedAuthorList}
						authors={localAllAuthors}
						onAuthorBtnClick={onAuthorSelectionChanged}
					/>
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
