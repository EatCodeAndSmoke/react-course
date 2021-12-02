import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
	name,
	id,
	value,
	cols,
	rows,
	placeholder,
	onTextChange,
}) => (
	<textarea
		className='form-control'
		name={name}
		id={id}
		value={value}
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
	onTextChange: PropTypes.func,
	value: PropTypes.string,
};

TextArea.defaultProps = {
	name: '',
	id: '',
	cols: 30,
	rows: 5,
	placeholder: '',
	value: '',
	onTextChange: (e) => e,
};

export default TextArea;
