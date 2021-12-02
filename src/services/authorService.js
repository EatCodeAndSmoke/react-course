import BaseService from './baseService';
import { apiPaths } from '../constants';

class AuthorService extends BaseService {
	getAll = async ({ onStarted, onSuccess, onFail }) =>
		this.GET({
			onStarted,
			onSuccess,
			onFail,
			url: apiPaths.ALL_AUTHORS,
		});

	add = async ({ data, onStarted, onSuccess, onFail }) =>
		this.POST({
			onStarted,
			onSuccess,
			onFail,
			data,
			url: apiPaths.ADD_AUTHOR,
		});
}

export default AuthorService;
