import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NotificationManager } from 'react-notifications';

import TextInput, { TextInputType } from '../../common/TextInput/TextInput';
import Button, { ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import useInputChangeHandler from '../../helpers/formInputHandlers';
import { logIn } from '../../store/user/thunk';

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const [loginRequested, setLoginRequested] = useState(false);

	const inputChangeHandler = useInputChangeHandler(loginData, setLoginData);

	const loginReq = {
		data: loginData,
		onStarted: () => setLoginRequested(true),
		onSuccess: () => {
			setLoginRequested(false);
			NotificationManager.success('LOGIN SUCCESS');
			history.push(appRoutes.HOME);
		},
		onFail: (msg) => {
			setLoginRequested(false);
			NotificationManager.error(msg);
		},
	};

	const onLoginClick = () => {
		dispatch(logIn(loginReq));
	};

	return (
		<div className='container mt-5'>
			<form action=''>
				<div className='form-group mt-4'>
					<h3>Login</h3>
				</div>
				<div className='form-group mt-4'>
					<label htmlFor='login-email'>EMAIL</label>
					<TextInput
						id='login-email'
						name='email'
						textInputType={TextInputType.Email}
						placeholder='Enter email'
						onTextChange={inputChangeHandler}
						value={loginData.email}
					/>
				</div>

				<div className='form-group mt-4'>
					<label htmlFor='login-password'>PASSWORD</label>
					<TextInput
						id='login-password'
						name='password'
						textInputType={TextInputType.Password}
						placeholder='Enter password'
						onTextChange={inputChangeHandler}
						value={loginData.password}
					/>
				</div>

				<div className='form-group mt-4 d-flex justify-content-center'>
					<Button
						buttonText='LOGIN'
						buttonColor={ButtonColor.Primary}
						onClick={onLoginClick}
						showLoader={loginRequested}
					/>
				</div>

				<div className='form-group mt-4 d-flex justify-content-center'>
					<p>
						if you not have an account, you can
						<Link to={{ pathname: appRoutes.REGISTRATION }}>Register</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
