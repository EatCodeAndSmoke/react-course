import authorActionTypes from './actionTypes';

const initialState = {
	authors: [],
	createAuthorRequested: false,
	loadAuthorsRequested: false,
	initialAuthorsLoaded: false,
};

const authorsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case authorActionTypes.INITIAL_AUTHORS_LOADED:
			return {
				...state,
				initialAuthorsLoaded: true,
			};

		case authorActionTypes.CREATE_AUTHOR_REQUEST:
			return {
				...state,
				createAuthorRequested: true,
			};

		case authorActionTypes.CREATE_AUTHOR_SUCCESS:
			return {
				...state,
				authors: [...state.authors, payload],
				createAuthorRequested: false,
			};

		case authorActionTypes.CREATE_AUTHOR_FAIL:
			return {
				...state,
				createAuthorRequested: false,
			};

		case authorActionTypes.LOAD_AUTHORS_REQUEST:
			return {
				...state,
				loadAuthorsRequested: true,
			};

		case authorActionTypes.LOAD_AUTHORS_SUCCESS:
			return {
				...state,
				loadAuthorsRequested: false,
				authors: [...payload],
			};

		case authorActionTypes.LOAD_AUTHORS_FAIL:
			return {
				...state,
				loadAuthorsRequested: false,
			};

		default:
			return state;
	}
};

export default authorsReducer;
