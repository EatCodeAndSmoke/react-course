import globalActionTypes from './actionTypes';

export const createSetErrorMessage = (errorMsg) => ({
	type: globalActionTypes.SET_ERROR_MESSAGE,
	payload: errorMsg,
});

export const createSetSuccessMessage = (successMsg) => ({
	type: globalActionTypes.SET_SUCCESS_MESSAGE,
	payload: successMsg,
});
