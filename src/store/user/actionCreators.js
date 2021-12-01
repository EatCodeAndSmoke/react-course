import userActionTypes from './actionTypes';

export const createUserLoggedOut = () => ({
	type: userActionTypes.USER_LOGGED_OUT,
});

export const createUserIdentityRetreived = (userIdentity) => ({
	type: userActionTypes.USER_IDENTITY_RETREIVED,
	payload: userIdentity,
});
