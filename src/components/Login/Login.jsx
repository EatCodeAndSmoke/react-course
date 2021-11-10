import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TextInput, TextInputType } from '../../common/Input/Input';
import { Button, ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import { AppUserContext } from '../../contexts/AppUserContext';

const Login = () => {
	const [loginData, setLoginData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { login } = useContext(AppUserContext);

	return (
		<div className='container mt-5'>
			<form action=''>
				<div className='form-group mt-4'>
					<h3>Login</h3>
				</div>
				<div className='form-group mt-4'>
					<label>Name</label>
					<TextInput
						textInputType={TextInputType.Text}
						placeholder='Enter name'
						onTextChange={(e) =>
							setLoginData({ ...loginData, name: e.target.value })
						}
					/>
				</div>
				<div className='form-group mt-4'>
					<label>EMAIL</label>
					<TextInput
						textInputType={TextInputType.Text}
						placeholder='Enter email'
						onTextChange={(e) =>
							setLoginData({
								...loginData,
								email: e.target.value,
							})
						}
					/>
				</div>

				<div className='form-group mt-4'>
					<label>PASSWORD</label>
					<TextInput
						textInputType={TextInputType.Password}
						placeholder='Enter password'
						onTextChange={(e) =>
							setLoginData({
								...loginData,
								password: e.target.value,
							})
						}
					/>
				</div>

				<div className='form-group mt-4 d-flex justify-content-center'>
					<Button
						buttonText='LOGIN'
						buttonColor={ButtonColor.Primary}
						onClick={() => login(loginData)}
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

Login.propTypes = {};

export default Login;
