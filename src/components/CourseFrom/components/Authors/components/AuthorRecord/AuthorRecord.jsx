import React from 'react';
import PropTypes from 'prop-types';

import Button, { ButtonSize } from '../../../../../../common/Button/Button';

const AuthorRecord = ({ author, btnColor, btnText, onAuthorBtnClick }) => (
	<div className='d-flex justify-content-center align-items-center mt-2'>
		<span style={{ marginRight: '7px' }}>{author.name}</span>
		<Button
			buttonColor={btnColor}
			outline
			ButtonSize={ButtonSize.Small}
			buttonText={btnText}
			onClick={() => onAuthorBtnClick(author.id, !author.selected)}
		/>
	</div>
);

AuthorRecord.propTypes = {
	author: PropTypes.exact({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		selected: PropTypes.bool.isRequired,
	}).isRequired,
	btnColor: PropTypes.string.isRequired,
	btnText: PropTypes.string.isRequired,
	onAuthorBtnClick: PropTypes.func.isRequired,
};

export default AuthorRecord;
