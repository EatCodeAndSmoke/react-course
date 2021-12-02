import React from 'react';
import PropTypes from 'prop-types';

export const TextInputType = {
	Text: 'text',
	Search: 'search',
	Email: 'email',
	Password: 'password',
};

const TextInput = ({
	name,
	id,
	value,
	textInputType,
	placeholder,
	onTextChange,
}) => (
	<input
		id={id}
		name={name}
		value={value}
		className='form-control'
		type={textInputType}
		placeholder={placeholder}
		onChange={onTextChange}
	/>
);

TextInput.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	textInputType: PropTypes.string,
	placeholder: PropTypes.string,
	onTextChange: PropTypes.func,
	value: PropTypes.string,
};

TextInput.defaultProps = {
	name: '',
	id: '',
	textInputType: TextInputType.Text,
	placeholder: '',
	value: '',
	onTextChange: () => {},
};

export default TextInput;
