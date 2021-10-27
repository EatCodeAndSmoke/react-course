import { TextInput, TextInputType } from '../../../../common/Input/Input';
import {
	Button,
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';
import React, { useState } from 'react';

const CreateAuthor = ({ onCreateAuthorClick }) => {
	const [newAuthor, setNewAuthor] = useState({
		id: '',
		name: '',
	});

	return (
		<div className={'d-flex flex-column'}>
			<h5 className={'text-center mb-3'}>Add author</h5>
			<TextInput
				textInputType={TextInputType.Text}
				placeholder='ENTER AUTHOR NAME'
				onTextChange={(e) =>
					setNewAuthor({ ...newAuthor, name: e.target.value })
				}
			/>
			<div className='text-center mt-3'>
				<Button
					buttonColor={ButtonColor.Primary}
					outline={true}
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

export default CreateAuthor;
