import UserService from '../../services/userService';
import { processAxiosResponse } from '../sharedThunk';
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
	async (dispatch) => {
		const meResp = await userService.me();

		const data = {
			resp: meResp,
			onSuccess: (resp) => {
				dispatch(
					createUserIdentityRetreived({ ...resp.result, token: readJwtToken() })
				);
				if (onSuccess) onSuccess();
			},
			onFail,
		};

		await processAxiosResponse(data);
	};

export const logIn =
	({ loginInput, onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		const loginResp = await userService.login(loginInput);

		const data = {
			resp: loginResp,
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
		};

		await processAxiosResponse(data);
	};

export const logOut =
	({ jwtToken, onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		const logOutResp = await userService.logout(jwtToken);

		const data = {
			resp: logOutResp,
			onStarted,
			onSuccess: () => {
				removeJwtToken();
				dispatch(createUserLoggedOut());
				if (onSuccess) onSuccess();
			},
			onFail,
		};

		await processAxiosResponse(data);
	};

export const register =
	({ registerInput, onStarted, onSuccess, onFail }) =>
	async () => {
		const registerResp = await userService.register(registerInput);

		const data = {
			resp: registerResp,
			onStarted,
			onSuccess,
			onFail,
		};

		await processAxiosResponse(data);
	};
