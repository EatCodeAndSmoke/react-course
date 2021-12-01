import userActionTypes from './actionTypes';

const initialState = {
	user: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	},
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case userActionTypes.USER_LOGGED_OUT:
			return {
				...state,
				user: initialState.user,
			};

		case userActionTypes.USER_IDENTITY_RETREIVED:
			return {
				...state,
				user: { ...payload, isAuth: true },
			};

		default:
			return state;
	}
};

export default userReducer;
