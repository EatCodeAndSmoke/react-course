import authorActionTypes from './actionTypes';

export const createAuthorsLoaded = (authors) => ({
	type: authorActionTypes.AUTHORS_LOADED,
	payload: authors,
});

export const createAuthorAdded = (author) => ({
	type: authorActionTypes.AUTHOR_ADDED,
	payload: author,
});
