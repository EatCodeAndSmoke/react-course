import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUserData, isLogoutRequested } from '../../../../store/selectors';
import { appRoutes } from '../../../../constants';
import { clearUserData } from '../../../../helpers/localStorageHelper';
import Button, {
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';
import { logoutRequestSuccess } from '../../../../store/user/actionCreators';

const UserArea = () => {
	const history = useHistory();
	const userData = useSelector(getUserData);
	const logoutRequested = useSelector(isLogoutRequested);
	const dispatch = useDispatch();

	const onLogoutClick = () => {
		// sendLogoutRequest(
		// 	userData.token,
		// 	() => {
		// 		dispatch(logoutRequest());
		// 	},
		// 	() => {
		// 		dispatch(logoutRequestSuccess());
		// 		clearUserData();
		// 		history.push(appRoutes.LOGIN);
		// 	},
		// 	(errorMsg) => {
		// 		dispatch(logoutRequestFail());
		// 		dispatch(createSetErrorMessage(errorMsg));
		// 	}
		// );

		dispatch(logoutRequestSuccess());
		clearUserData();
		// eslint-disable-next-line react/prop-types
		history.push(appRoutes.LOGIN);
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
