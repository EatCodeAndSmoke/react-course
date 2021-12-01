import axios from 'axios';

import { apiRootPath, httpMethods } from '../constants';
import { readJwtToken } from '../helpers/localStorageHelper';

class BaseService {
	constructor() {
		axios.defaults.baseURL = apiRootPath;
		axios.defaults.headers['Content-Type'] = 'application/json';
	}

	REQUEST = async ({ url, method, headers, params, data }) => {
		try {
			if (!url) throw new Error('url is empty');
			if (!method) throw new Error('method is empty');

			const token = readJwtToken();
			axios.defaults.headers.Authorization = token;

			const axiosData = {
				url,
				method,
				headers,
				params,
				data,
			};

			const resp = await axios(axiosData);
			return resp;
		} catch (er) {
			return { status: 500, data: er };
		}
	};

	GET = async ({ url, headers, params, data }) => {
		const resp = await this.REQUEST({
			url,
			headers,
			params,
			data,
			method: httpMethods.GET,
		});

		return resp;
	};

	POST = async ({ url, headers, params, data }) => {
		const res = await this.REQUEST({
			url,
			headers,
			params,
			data,
			method: httpMethods.POST,
		});

		return res;
	};

	PUT = async ({ url, headers, params, data }) => {
		const resp = await this.REQUEST({
			url,
			headers,
			params,
			data,
			method: httpMethods.PUT,
		});

		return resp;
	};

	DELETE = async ({ url, headers, params, data }) => {
		const resp = await this.REQUEST({
			url,
			headers,
			params,
			data,
			method: httpMethods.DELETE,
		});

		return resp;
	};
}

export default BaseService;
