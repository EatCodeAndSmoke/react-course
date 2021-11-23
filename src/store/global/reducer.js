import globalActionTypes from './actionTypes';

const initialState = {
	errorMessage: '',
	successMessage: '',
};

const globalReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case globalActionTypes.SET_ERROR_MESSAGE:
			return {
				...state,
				errorMessage: payload,
			};

		case globalActionTypes.SET_SUCCESS_MESSAGE:
			return {
				...state,
				successMessage: payload,
			};

		default:
			return state;
	}
};

export default globalReducer;
