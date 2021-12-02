import authorActionTypes from './actionTypes';

const initialState = {
	authors: [],
};

const authorsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case authorActionTypes.AUTHORS_LOADED:
			return {
				...state,
				authors: [...payload],
			};

		case authorActionTypes.AUTHOR_ADDED:
			return {
				...state,
				authors: [...state.authors, payload],
			};

		default:
			return state;
	}
};

export default authorsReducer;
