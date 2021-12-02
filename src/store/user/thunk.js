import UserService from '../../services/userService';
import {
	setJwtToken,
	removeJwtToken,
	readJwtToken,
} from '../../helpers/localStorageHelper';
import {
	createUserLoggedOut,
	createUserIdentityRetreived,
} from './actionCreators';

const userService = new UserService();

export const retreiveUserIdentity =
	({ onSuccess, onFail }) =>
	async (dispatch) =>
		userService.me({
			onSuccess: (resp) => {
				dispatch(
					createUserIdentityRetreived({ ...resp.result, token: readJwtToken() })
				);
				if (onSuccess) onSuccess();
			},
			onFail,
		});

export const logIn =
	({ data, onStarted, onSuccess, onFail }) =>
	async (dispatch) =>
		userService.login({
			data,
			onStarted,
			onSuccess: (resp) => {
				setJwtToken(resp.result);
				dispatch(
					retreiveUserIdentity({
						onSuccess,
						onFail,
					})
				);
			},
			onFail,
		});

export const logOut =
	({ data, onStarted, onSuccess, onFail }) =>
	async (dispatch) =>
		userService.logout({
			data,
			onStarted,
			onSuccess: () => {
				removeJwtToken();
				dispatch(createUserLoggedOut());
				if (onSuccess) onSuccess();
			},
			onFail,
		});

export const register =
	({ data, onStarted, onSuccess, onFail }) =>
	async () =>
		userService.register({
			data,
			onStarted,
			onSuccess,
			onFail,
		});
