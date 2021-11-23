import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	NotificationManager,
	NotificationContainer,
} from 'react-notifications';

import { getErrorMessage, getSuccessMessage } from '../../store/selectors';
import {
	createSetErrorMessage,
	createSetSuccessMessage,
} from '../../store/global/actionCreators';

const NotifyClient = () => {
	const dispatch = useDispatch();
	const errorMessage = useSelector(getErrorMessage);
	const successMessage = useSelector(getSuccessMessage);

	useEffect(() => {
		if (errorMessage) {
			NotificationManager.error(errorMessage);
			dispatch(createSetErrorMessage(''));
		}
	}, [dispatch, errorMessage]);

	useEffect(() => {
		if (successMessage) {
			NotificationManager.success(successMessage);
			dispatch(createSetSuccessMessage(''));
		}
	}, [dispatch, successMessage]);

	return (
		<>
			<NotificationContainer />
		</>
	);
};

export default NotifyClient;
