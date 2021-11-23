import { apiPaths, httpMethods } from './constants';

export const sendApiRequest = async (
	path,
	method,
	body,
	headers,
	onStarted,
	onSuccess,
	onFail
) => {
	const fetchData = {
		method,
		body,
		headers: headers || {},
	};

	if (fetchData.body) fetchData.body = JSON.stringify(fetchData.body);
	fetchData.headers['Content-Type'] = 'application/json';

	try {
		if (onStarted) onStarted();

		const response = await fetch(path, fetchData);
		const resp = await response.json();

		if (resp.successful && onSuccess) {
			onSuccess(resp);
		} else if (!resp.successful && onFail) {
			const errorMsg = resp.errors
				? resp.errors.map((str) => str).join('; ')
				: resp.result;
			onFail(errorMsg || 'ERROR OCCURED');
		}
	} catch (ex) {
		if (onFail) onFail(ex);
	}
};

export const sendLoginRequest = async (
	loginInput,
	onStarted,
	onSuccess,
	onFail
) =>
	sendApiRequest(
		apiPaths.LOGIN,
		httpMethods.POST,
		loginInput,
		null,
		onStarted,
		onSuccess,
		onFail
	);

export const sendRegisterRequest = async (
	registerInput,
	onStarted,
	onSuccess,
	onFail
) =>
	sendApiRequest(
		apiPaths.REGISTER,
		httpMethods.POST,
		registerInput,
		null,
		onStarted,
		onSuccess,
		onFail
	);

export const sendLogoutRequest = async (
	jwtToken,
	onStarted,
	onSuccess,
	onFail
) =>
	sendApiRequest(
		apiPaths.LOGOUT,
		httpMethods.DELETE,
		null,
		{ Authorization: jwtToken },
		onStarted,
		onSuccess,
		onFail
	);

export const sendgetAllAuthorsRequest = async (onStarted, onSuccess, onFail) =>
	sendApiRequest(
		apiPaths.GET_ALL_AUTHORS,
		httpMethods.GET,
		null,
		null,
		onStarted,
		onSuccess,
		onFail
	);

export const sendgetAllCoursesRequest = async (onStarted, onSuccess, onFail) =>
	sendApiRequest(
		apiPaths.GET_ALL_COURSES,
		httpMethods.GET,
		null,
		null,
		onStarted,
		onSuccess,
		onFail
	);
