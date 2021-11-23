import React from 'react';
import PropTypes from 'prop-types';

import { ButtonColor } from '../../../../common/Button/Button';
import AuthorRecord from './components/AuthorRecord/AuthorRecord';

export const AuthorsMode = {
	NotSelectedAuthorsList: 1,
	SelectedAuthorList: 2,
};

const Authors = ({ authorsMode, authors, onAuthorBtnClick }) => {
	const headerTitle =
		authorsMode === AuthorsMode.NotSelectedAuthorsList
			? 'Authors'
			: 'Course authors';

	const btnColor =
		authorsMode === AuthorsMode.NotSelectedAuthorsList
			? ButtonColor.Primary
			: ButtonColor.Danger;

	const btnText =
		authorsMode === AuthorsMode.NotSelectedAuthorsList
			? 'ADD AUTHOR'
			: 'REMOVE AUTHOR';

	const authorList = authors
		.filter((a) =>
			authorsMode === AuthorsMode.NotSelectedAuthorsList
				? !a.selected
				: a.selected
		)
		.map((a) => (
			<AuthorRecord
				key={a.id}
				author={a}
				btnColor={btnColor}
				btnText={btnText}
				onAuthorBtnClick={() => onAuthorBtnClick(a.id)}
			/>
		));

	return (
		<div className='d-flex flex-column'>
			<h5 className='text-center mb-3'>{headerTitle}</h5>
			{authorList}
		</div>
	);
};

Authors.propTypes = {
	authorsMode: PropTypes.oneOf(AuthorsMode).isRequired,
	authors: PropTypes.arrayOf(PropTypes.any).isRequired,
	onAuthorBtnClick: PropTypes.func.isRequired,
};

export default Authors;
