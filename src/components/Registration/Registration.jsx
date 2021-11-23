import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TextInput, { TextInputType } from '../../common/TextInput/TextInput';
import Button, { ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import onInputChangeHandler from '../../helpers/formInputHandlers';
import { sendRegisterRequest } from '../../services';
import { isRegistrationRequested } from '../../store/selectors';
import {
	createSetErrorMessage,
	createSetSuccessMessage,
} from '../../store/global/actionCreators';
import {
	registerUserRequest,
	registerUserSuccess,
	registerUserFail,
} from '../../store/user/actionCreators';

const Registration = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const registrationRequested = useSelector(isRegistrationRequested);

	const [registrationData, setRegistrationData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const inputChangeHandler = onInputChangeHandler(
		registrationData,
		setRegistrationData
	);

	const onRegisterClick = () => {
		// eslint-disable-next-line no-debugger
		debugger;
		sendRegisterRequest(
			registrationData,
			() => {
				dispatch(registerUserRequest());
			},
			() => {
				dispatch(registerUserSuccess());
				dispatch(createSetSuccessMessage('REGISTRATION SUCCEEDED'));
				history.push(appRoutes.LOGIN);
			},
			(errorMsg) => {
				dispatch(registerUserFail());
				dispatch(createSetErrorMessage(errorMsg));
			}
		);
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
