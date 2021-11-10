import { TextInput, TextInputType } from '../../../../common/Input/Input';
import {
	Button,
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';

function SearchBar({ onTextChange }) {
	return (
		<div className='d-flex'>
			<TextInput
				textInputType={TextInputType.Search}
				placeholder='TYPE TO SEARCH'
				onTextChange={onTextChange}
			/>

			<Button
				buttonColor={ButtonColor.Success}
				outline={true}
				buttonSize={ButtonSize.Small}
				buttonText='SEARCH'
			/>
		</div>
	);
}

export default SearchBar;
