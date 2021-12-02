import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Authors, { AuthorsMode } from '../Authors/Authors';
import { getAuthors } from '../../../../store/selectors';

const AuthorsList = ({ courseAuthors, onAuthorBtnClick }) => {
	const authors = useSelector(getAuthors);
	const authorsWithSelection = authors.map((a) => ({
		...a,
		selected: courseAuthors.includes(a.id),
	}));

	return (
		<>
			<Authors
				authorsMode={AuthorsMode.NotSelectedAuthorsList}
				authors={authorsWithSelection}
				onAuthorBtnClick={onAuthorBtnClick}
			/>

			<div className='mt-4'>
				<Authors
					authorsMode={AuthorsMode.SelectedAuthorList}
					authors={authorsWithSelection}
					onAuthorBtnClick={onAuthorBtnClick}
				/>
			</div>
		</>
	);
};

AuthorsList.propTypes = {
	courseAuthors: PropTypes.arrayOf(PropTypes.string).isRequired,
	onAuthorBtnClick: PropTypes.func.isRequired,
};

export default AuthorsList;
