import { createUserLoggedOut } from './user/actionCreators';

// eslint-disable-next-line import/prefer-default-export
export const processAxiosResponse = async ({
	resp,
	dispatch,
	onStarted,
	onSuccess,
	onFail,
}) => {
	if (onStarted) onStarted();
	const { status, data } = resp;

	if (status === 200 || status === 201) {
		if (onSuccess) onSuccess(data);
	} else if (status === 401) {
		dispatch(createUserLoggedOut());
	} else if (onFail) {
		if (status === 400) onFail(data.errors.join('; '));
		else if (status === 401) onFail(data.result || 'RECORD NOT FOUND');
		else onFail('SOMETHING WENT WRONG');
	}
};
