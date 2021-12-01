import React from 'react';
import PropTypes from 'prop-types';

import TextInput, {
	TextInputType,
} from '../../../../common/TextInput/TextInput';
import Button, {
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';

const SearchBar = ({ onTextChange }) => (
	<div className='d-flex'>
		<TextInput
			textInputType={TextInputType.Search}
			placeholder='TYPE TO SEARCH'
			onTextChange={onTextChange}
		/>

		<Button
			buttonColor={ButtonColor.Success}
			outline
			buttonSize={ButtonSize.Small}
			buttonText='SEARCH'
		/>
	</div>
);

SearchBar.propTypes = {
	onTextChange: PropTypes.func,
};

SearchBar.defaultProps = {
	onTextChange: (e) => e.preventDefault(),
};

export default SearchBar;
