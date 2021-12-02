import BaseService from './baseService';
import { apiPaths } from '../constants';

class UserService extends BaseService {
	login = async ({ data, onStarted, onSuccess, onFail }) =>
		this.POST({
			onStarted,
			onSuccess,
			onFail,
			data,
			url: apiPaths.LOGIN,
		});

	register = async ({ data, onStarted, onSuccess, onFail }) =>
		this.POST({
			onStarted,
			onSuccess,
			onFail,
			data,
			url: apiPaths.REGISTER,
		});

	logout = async ({ data, onStarted, onSuccess, onFail }) =>
		this.DELETE({
			onStarted,
			onSuccess,
			onFail,
			url: apiPaths.LOGOUT,
			headers: { Authorization: data },
		});

	me = async ({ onStarted, onSuccess, onFail }) =>
		this.GET({
			onStarted,
			onSuccess,
			onFail,
			url: apiPaths.ME,
		});
}

export default UserService;
