import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TextInput, { TextInputType } from '../../common/TextInput/TextInput';
import Button, { ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import useInputChangeHandler from '../../helpers/formInputHandlers';
import { sendLoginRequest } from '../../services';
import { isLoginRequested } from '../../store/selectors';
import { createSetErrorMessage } from '../../store/global/actionCreators';
import { setUserData } from '../../helpers/localStorageHelper';
import {
	loginRequest,
	loginRequestSuccess,
	loginRequestFail,
} from '../../store/user/actionCreators';

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();
	const history = useHistory();
	const loginRequested = useSelector(isLoginRequested);
	const inputChangeHandler = useInputChangeHandler(loginData, setLoginData);

	const onLoginClick = () => {
		sendLoginRequest(
			loginData,
			() => {
				dispatch(loginRequest());
			},
			(resp) => {
				const userData = { ...resp.user, token: resp.result };
				setUserData(userData);
				dispatch(loginRequestSuccess(userData));
				history.push(appRoutes.HOME);
			},
			(errorMsg) => {
				dispatch(loginRequestFail());
				dispatch(createSetErrorMessage(errorMsg));
			}
		);
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
