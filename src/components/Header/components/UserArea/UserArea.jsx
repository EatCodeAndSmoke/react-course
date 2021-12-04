import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import { getUserData } from '../../../../store/selectors';
import { logOut } from '../../../../store/user/thunk';
import Button, {
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';

const UserArea = () => {
	const dispatch = useDispatch();
	const userData = useSelector(getUserData);
	const [logoutRequested, setLogoutRequested] = useState(false);

	const logoutReq = {
		data: userData.token,
		onStarted: () => setLogoutRequested(true),
		onSuccess: () => {
			setLogoutRequested(false);
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
		userData.isAuth && (
			<div
				data-testid='user-area'
				className='d-flex justify-content-center align-items-center'
			>
				<h6
					data-testid='user-area-username'
					style={{ marginRight: '8px', marginTop: 'auto' }}
				>
					{userData.name}
				</h6>
				<Button
					buttonColor={ButtonColor.Secondary}
					onClick={onLogoutClick}
					buttonSize={ButtonSize.Small}
					buttonText='LOGOUT'
					showLoader={logoutRequested}
				/>
			</div>
		)
	);
};

export default UserArea;
