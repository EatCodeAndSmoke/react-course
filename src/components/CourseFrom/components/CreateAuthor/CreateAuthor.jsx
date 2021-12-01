import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import onInputChangeHandler from '../../../../helpers/formInputHandlers';
import { addAuthor } from '../../../../store/authors/thunk';
import TextInput, {
	TextInputType,
} from '../../../../common/TextInput/TextInput';
import Button, {
	ButtonSize,
	ButtonColor,
} from '../../../../common/Button/Button';

const CreateAuthor = () => {
	const dispatch = useDispatch();

	const [newAuthor, setNewAuthor] = useState({
		id: '',
		name: '',
	});

	const [addAuthorRequested, setAddAuthorRequested] = useState(false);

	const inputChangeHandler = onInputChangeHandler(newAuthor, setNewAuthor);

	const req = {
		author: newAuthor,
		onStarted: () => setAddAuthorRequested(true),
		onSuccess: () => {
			setAddAuthorRequested(false);
			NotificationManager.success('AUTHOR CREATED');
		},
		onFail: (msg) => {
			setAddAuthorRequested(false);
			NotificationManager.error(msg);
		},
	};

	const createAuthorClickHandler = () => dispatch(addAuthor(req));

	return (
		<div className='d-flex flex-column'>
			<h5 className='text-center mb-3'>Add author</h5>
			<TextInput
				id='authorNametxt'
				name='name'
				textInputType={TextInputType.Text}
				placeholder='ENTER AUTHOR NAME'
				onTextChange={inputChangeHandler}
			/>
			<div className='text-center mt-3'>
				<Button
					buttonColor={ButtonColor.Primary}
					outline
					ButtonSize={ButtonSize.Small}
					buttonText='CREATE AUTHOR'
					showLoader={addAuthorRequested}
					onClick={createAuthorClickHandler}
				/>
			</div>
		</div>
	);
};

export default CreateAuthor;
