import {
	Button,
	ButtonColor,
	ButtonSize,
} from '../../../../common/Button/Button';
import { useContext } from 'react';
import { AppUserContext } from '../../../../contexts/AppUserContext';

const UserArea = () => {
	const { userData, logOut } = useContext(AppUserContext);

	return (
		<div className='d-flex justify-content-center align-items-center'>
			<h6 style={{ marginRight: '8px', marginTop: 'auto' }}>
				{userData.userName}
			</h6>
			<Button
				buttonColor={ButtonColor.Secondary}
				onClick={logOut}
				buttonSize={ButtonSize.Small}
				buttonText='LOGOUT'
			/>
		</div>
	);
};

export default UserArea;
