import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ name, id, cols, rows, placeholder, onTextChange }) => (
	<textarea
		className='form-control'
		name={name}
		id={id}
		cols={cols.toString()}
		rows={rows.toString()}
		placeholder={placeholder}
		onChange={onTextChange}
	/>
);

TextArea.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	cols: PropTypes.number,
	rows: PropTypes.number,
	placeholder: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	onTextChange: PropTypes.func,
};

TextArea.defaultProps = {
	name: '',
	id: '',
	cols: 30,
	rows: 5,
	placeholder: '',
};

export default TextArea;
