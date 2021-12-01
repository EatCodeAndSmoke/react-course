import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import TextInput, { TextInputType } from '../../common/TextInput/TextInput';
import Button, { ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import onInputChangeHandler from '../../helpers/formInputHandlers';
import { register } from '../../store/user/thunk';

const Registration = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [registrationRequested, setRegistrationRequested] = useState(false);

	const [registrationData, setRegistrationData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const inputChangeHandler = onInputChangeHandler(
		registrationData,
		setRegistrationData
	);

	const registerReq = {
		registerInput: registrationData,
		onStarted: () => setRegistrationRequested(true),
		onSuccess: () => {
			setRegistrationRequested(false);
			NotificationManager.success('REGISTRATION SUCCESS');
			history.push(appRoutes.LOGIN);
		},
		onFail: (msg) => {
			setRegistrationRequested(false);
			NotificationManager.error(msg);
		},
	};

	const onRegisterClick = () => {
		dispatch(register(registerReq));
	};

	return (
		<div className='container mt-5'>
			<form>
				<div className='form-group mt-4'>
					<h3>Registration</h3>
				</div>
				<div className='form-group mt-4'>
					<label htmlFor='nameTxt'>Name</label>
					<TextInput
						id='nameTxt-id'
						name='name'
						textInputType={TextInputType.Text}
						placeholder='Enter name'
						onTextChange={inputChangeHandler}
					/>
				</div>

				<div className='form-group mt-4'>
					<label htmlFor='nameTxt'>EMAIL</label>
					<TextInput
						id='emailTxt-id'
						name='email'
						textInputType={TextInputType.Email}
						placeholder='Enter email'
						onTextChange={inputChangeHandler}
					/>
				</div>

				<div className='form-group mt-4'>
					<label htmlFor='passwordTxt'>PASSWORD</label>
					<TextInput
						id='passwordTxt-id'
						name='password'
						textInputType={TextInputType.Password}
						placeholder='Enter password'
						onTextChange={inputChangeHandler}
					/>
				</div>

				<div className='form-group mt-4 d-flex justify-content-center'>
					<Button
						buttonText='REGISTRATION'
						buttonColor={ButtonColor.Primary}
						onClick={onRegisterClick}
						showLoader={registrationRequested}
					/>
				</div>

				<div className='form-group mt-4 d-flex justify-content-center'>
					<p>
						if you have an account, you can
						<Link to={{ pathname: appRoutes.LOGIN }}>Login</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Registration;
