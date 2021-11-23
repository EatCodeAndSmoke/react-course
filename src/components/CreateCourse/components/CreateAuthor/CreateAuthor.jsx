import React, { useState } from 'react';
import PropTypes from 'prop-types';

import onInputChangeHandler from '../../../../helpers/formInputHandlers';
import TextInput, {
	TextInputType,
} from '../../../../common/TextInput/TextInput';
import Button, {
	ButtonSize,
	ButtonColor,
} from '../../../../common/Button/Button';

const CreateAuthor = ({ onCreateAuthorClick }) => {
	const [newAuthor, setNewAuthor] = useState({
		id: '',
		name: '',
	});

	const inputChangeHandler = onInputChangeHandler(newAuthor, setNewAuthor);

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
					onClick={() =>
						onCreateAuthorClick({ ...newAuthor, id: crypto.randomUUID() })
					}
				/>
			</div>
		</div>
	);
};

CreateAuthor.propTypes = {
	onCreateAuthorClick: PropTypes.func.isRequired,
};

export default CreateAuthor;
