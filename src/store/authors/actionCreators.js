import authorActionTypes from './actionTypes';

export const setInitialAuthorsLoaded = () => ({
	type: authorActionTypes.INITIAL_AUTHORS_LOADED,
});

export const createAuthorRequest = () => ({
	type: authorActionTypes.CREATE_AUTHOR_REQUEST,
});

export const createAuthorSuccess = (author) => ({
	type: authorActionTypes.CREATE_AUTHOR_SUCCESS,
	payload: author,
});

export const createAuthorFail = () => ({
	type: authorActionTypes.CREATE_AUTHOR_FAIL,
});

export const createLoadAuthors = () => ({
	type: authorActionTypes.LOAD_AUTHORS_REQUEST,
});

export const createLoadAuthorsSuccess = (authors) => ({
	type: authorActionTypes.LOAD_AUTHORS_SUCCESS,
	payload: authors,
});

export const createLoadAuthorsFail = () => ({
	type: authorActionTypes.LOAD_AUTHORS_FAIL,
});
