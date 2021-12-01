import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import { getUserData } from '../../../../store/selectors';
import { appRoutes } from '../../../../constants';
import { logOut } from '../../../../store/user/thunk';
import Button, {
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';

const UserArea = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userData = useSelector(getUserData);

	const [logoutRequested, setLogoutRequested] = useState(false);

	const logoutReq = {
		jwtToken: userData.token,
		onStarted: () => setLogoutRequested(true),
		onSuccess: () => {
			setLogoutRequested(false);
			history.push(appRoutes.LOGIN);
		},
		onFail: (msg) => {
			setLogoutRequested(false);
			NotificationManager.error(msg);
		},
	};

	const onLogoutClick = () => {
		dispatch(logOut(logoutReq));
	};

	return (
		<div className='d-flex justify-content-center align-items-center'>
			<h6 style={{ marginRight: '8px', marginTop: 'auto' }}>{userData.name}</h6>
			<Button
				buttonColor={ButtonColor.Secondary}
				onClick={onLogoutClick}
				buttonSize={ButtonSize.Small}
				buttonText='LOGOUT'
				showLoader={logoutRequested}
			/>
		</div>
	);
};

export default UserArea;
