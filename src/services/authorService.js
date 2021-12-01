import BaseService from './baseService';
import { apiPaths } from '../constants';

class AuthorService extends BaseService {
	getAll = async () => {
		const resp = await this.GET({
			url: apiPaths.ALL_AUTHORS,
		});

		return resp;
	};

	add = async (author) => {
		const resp = await this.POST({
			url: apiPaths.ADD_AUTHOR,
			data: author,
		});

		return resp;
	};
}

export default AuthorService;
