import userActionTypes from './actionTypes';
import { readUserData } from '../../helpers/localStorageHelper';

const initialState = {
	registerUserRequested: false,
	loginRequested: false,
	logoutRequested: false,
	user: readUserData(),
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		// register
		case userActionTypes.REGISTER_USER_REQUEST:
			return {
				...state,
				registerUserRequested: true,
			};

		case userActionTypes.REGISTER_USER_SUCCESS:
			return {
				...state,
				registerUserRequested: false,
			};

		case userActionTypes.REGISTER_USER_FAIL:
			return {
				...state,
				registerUserRequested: false,
			};

		// login
		case userActionTypes.LOGIN_REQUEST:
			return {
				...state,
				loginRequested: true,
			};

		case userActionTypes.LOGIN_REQUEST_SUCCESS:
			return {
				...state,
				loginRequested: false,
				user: {
					isAuth: true,
					name: payload.name,
					email: payload.email,
					token: payload.token,
				},
			};

		case userActionTypes.LOGIN_REQUEST_FAIL:
			return {
				...state,
				loginRequested: false,
			};

		// logout
		case userActionTypes.LOGOUT_REQUEST:
			return {
				...state,
				logoutRequested: true,
			};

		case userActionTypes.LOGOUT_REQUEST_SUCCESS:
			return {
				...state,
				logoutRequested: false,
				user: {
					isAuth: false,
					name: '',
					email: '',
					token: '',
				},
			};

		case userActionTypes.LOGOUT_REQUEST_FAIL:
			return {
				...state,
				logoutRequested: false,
			};

		default:
			return state;
	}
};

export default userReducer;
