import BaseService from './baseService';
import { apiPaths } from '../constants';

class UserService extends BaseService {
	login = async (loginInput) => {
		const resp = await this.POST({
			data: loginInput,
			url: apiPaths.LOGIN,
		});

		return resp;
	};

	register = async (registerInput) => {
		const resp = await this.POST({
			data: registerInput,
			url: apiPaths.REGISTER,
		});

		return resp;
	};

	logout = async (jwtToken) => {
		const resp = this.DELETE({
			url: apiPaths.LOGOUT,
			headers: { Authorization: jwtToken },
		});

		return resp;
	};

	me = async () => {
		const resp = await this.GET({
			url: apiPaths.ME,
		});

		return resp;
	};
}

export default UserService;
