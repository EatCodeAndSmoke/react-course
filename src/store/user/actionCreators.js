import userActionTypes from './actionTypes';

// register
export const registerUserRequest = () => ({
	type: userActionTypes.REGISTER_USER_REQUEST,
});

export const registerUserSuccess = () => ({
	type: userActionTypes.REGISTER_USER_SUCCESS,
});

export const registerUserFail = () => ({
	type: userActionTypes.REGISTER_USER_FAIL,
});

// login
export const loginRequest = () => ({
	type: userActionTypes.LOGIN_REQUEST,
});

export const loginRequestSuccess = (loggedInUserData) => ({
	type: userActionTypes.LOGIN_REQUEST_SUCCESS,
	payload: loggedInUserData,
});

export const loginRequestFail = () => ({
	type: userActionTypes.LOGIN_REQUEST_FAIL,
});

// logout
export const logoutRequest = () => ({
	type: userActionTypes.LOGOUT_REQUEST,
});

export const logoutRequestSuccess = () => ({
	type: userActionTypes.LOGOUT_REQUEST_SUCCESS,
});

export const logoutRequestFail = () => ({
	type: userActionTypes.LOGOUT_REQUEST_FAIL,
});
