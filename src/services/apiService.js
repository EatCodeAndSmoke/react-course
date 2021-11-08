import { NotificationManager } from 'react-notifications';
import { apiPaths } from '../constants';

export const sendApiRequest = async (
	path,
	method,
	body,
	headers,
	showSuccessMessage,
	showErrorMessage
) => {
	debugger;
	let fetchData = {
		method: method,
		headers: {},
	};

	if (body) fetchData.body = JSON.stringify(body);
	if (headers) fetchData.headers = { ...headers };

	fetchData.headers['Content-Type'] = 'application/json';

	try {
		const response = await fetch(path, fetchData);
		var resp = await response.json();

		if (resp.successful) {
			if (showSuccessMessage)
				NotificationManager.success('OPERATION SUCCEEDED');

			return resp;
		}

		if (!resp.successful && showErrorMessage) {
			if (resp.errors) {
				const errorMessage = resp.errors.join('\r\n');
				NotificationManager.error(errorMessage);
			} else {
				NotificationManager.error('ERROR OCCURED');
			}
		}
	} catch {
		if (showErrorMessage) NotificationManager.error('UNHANDLED ERROR OCCURED');
	}
};

export const sendLoginRequest = async (loginInput) => {
	return await sendApiRequest(
		apiPaths.LOGIN,
		'POST',
		loginInput,
		null,
		false,
		true
	);
};

export const sendRegisterRequest = async (registerInput) => {
	return await sendApiRequest(
		apiPaths.REGISTER,
		'POST',
		registerInput,
		null,
		true,
		true
	);
};

export const sendLogoutRequest = async (jwtToken) => {
	return await sendApiRequest(
		apiPaths.LOGOUT,
		'POST',
		null,
		{ Authorization: jwtToken },
		false,
		true
	);
};
