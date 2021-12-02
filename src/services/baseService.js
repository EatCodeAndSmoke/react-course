import axios from 'axios';

import { apiRootPath, httpMethods } from '../constants';
import { readJwtToken, removeJwtToken } from '../helpers/localStorageHelper';

class BaseService {
	constructor() {
		axios.defaults.baseURL = apiRootPath;
		axios.defaults.headers['Content-Type'] = 'application/json';
	}

	REQUEST = async ({
		url,
		method,
		headers,
		params,
		data,
		onStarted,
		onSuccess,
		onFail,
	}) => {
		try {
			// console.log('REQUESTED: ', url);
			// console.log('DATA: ', data);
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
				validateStatus: (status) => status < 500,
			};

			if (onStarted) onStarted();
			const resp = await axios(axiosData);
			const { status } = resp;
			// console.log(`URL ${url} returned`, resp);

			if (status === 200 || status === 201) {
				if (onSuccess) onSuccess(resp.data);
			} else {
				if (status === 401) removeJwtToken();
				if (onFail) {
					if (status === 400) onFail(resp.data.errors.join('; '));
					else onFail(resp.data.result || 'SOMETHING WENT WRONG');
				}
			}

			return { status, data: resp.data };
		} catch (er) {
			// console.log('error base: ', er);
			if (onFail) onFail('SOMETHING WENT WRONG');
			return { status: 500 };
		}
	};

	GET = async ({ url, headers, params, data, onStarted, onSuccess, onFail }) =>
		this.REQUEST({
			url,
			headers,
			params,
			data,
			onStarted,
			onSuccess,
			onFail,
			method: httpMethods.GET,
		});

	POST = async ({ url, headers, params, data, onStarted, onSuccess, onFail }) =>
		this.REQUEST({
			url,
			headers,
			params,
			data,
			onStarted,
			onSuccess,
			onFail,
			method: httpMethods.POST,
		});

	PUT = async ({ url, headers, params, data, onStarted, onSuccess, onFail }) =>
		this.REQUEST({
			url,
			headers,
			params,
			data,
			onStarted,
			onSuccess,
			onFail,
			method: httpMethods.PUT,
		});

	DELETE = async ({
		url,
		headers,
		params,
		data,
		onStarted,
		onSuccess,
		onFail,
	}) =>
		this.REQUEST({
			url,
			headers,
			params,
			data,
			onStarted,
			onSuccess,
			onFail,
			method: httpMethods.DELETE,
		});
}

export default BaseService;
