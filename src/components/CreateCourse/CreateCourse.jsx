import { TextInput, TextArea, TextInputType } from '../../common/Input/Input';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import { Authors, AuthorsMode } from './components/Authors/Authors';
import React, { useState, useContext } from 'react';
import { getCurrentDate } from '../../helpers/dateGenerator';
import { getDurationText } from '../../helpers/pipeDuration';
import { AppCoursesContext } from '../../contexts/AppCoursesContext';
import { useLoginCheck } from '../hoc/LoginCheckHOC/LoginCheckHOC';

const CreateCourse = () => {
	const { authors, addNewCourse, addNewAuthor } = useContext(AppCoursesContext);

	const authorsWithSelectedState = authors.map((a) => {
		return { ...a, selected: false };
	});

	const [localAllAuthors, setLocalAllAuthors] = useState(
		authorsWithSelectedState
	);

	const [newCourse, setNewCourse] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: getCurrentDate(),
		duration: 0,
		authors: [],
	});

	const onAuthorSelectionChanged = (authorId) => {
		const author = localAllAuthors.find((a) => a.id === authorId);
		author.selected = !author.selected;
		setLocalAllAuthors([...localAllAuthors]);
	};

	const onAuthorAdded = (author) => {
		setLocalAllAuthors([...localAllAuthors, { ...author, selected: false }]);
		addNewAuthor(author);
	};

	const onCourseAdded = (e) => {
		e.preventDefault();
		const selectedAuthors = localAllAuthors.filter((a) => a.selected);
		newCourse.authors = [...selectedAuthors.map((a) => a.id)];
		addNewCourse({ ...newCourse, id: crypto.randomUUID() });
	};

	return useLoginCheck(
		<form onSubmit={onCourseAdded}>
			<div className='form-group row mt-3'>
				<div className='col-6'>
					<TextInput
						textInputType={TextInputType.Text}
						placeholder='ENTER COURSE TITLE'
						onTextChange={(e) =>
							setNewCourse({ ...newCourse, title: e.target.value })
						}
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
						onTextChange={(e) =>
							setNewCourse({ ...newCourse, description: e.target.value })
						}
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
					<h3 className={'mt-3'}>
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
