import React from 'react';
import PropTypes from 'prop-types';

export const TextInputType = {
	Text: 'text',
	Search: 'search',
	Email: 'email',
	Password: 'password',
};

const TextInput = ({ name, id, textInputType, placeholder, onTextChange }) => (
	<input
		id={id}
		name={name}
		className='form-control'
		type={textInputType}
		placeholder={placeholder}
		onChange={onTextChange}
	/>
);

TextInput.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	textInputType: PropTypes.oneOf(TextInputType),
	placeholder: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	onTextChange: PropTypes.func,
};

TextInput.defaultProps = {
	name: '',
	id: '',
	textInputType: TextInputType.Text,
	placeholder: '',
};

export default TextInput;
