import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TextInput, TextInputType } from '../../common/Input/Input';
import { Button, ButtonColor } from '../../common/Button/Button';
import { appRoutes } from '../../constants';
import { AppUserContext } from '../../contexts/AppUserContext';

const Registration = () => {
	const [registrationData, setRegistrationData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const { register } = useContext(AppUserContext);

	return (
		<div className='container mt-5'>
			<form action=''>
				<div className='form-group mt-4'>
					<h3>Registration</h3>
				</div>
				<div className='form-group mt-4'>
					<label>Name</label>
					<TextInput
						textInputType={TextInputType.Text}
						placeholder='Enter name'
						onTextChange={(e) =>
							setRegistrationData({ ...registrationData, name: e.target.value })
						}
					/>
				</div>

				<div className='form-group mt-4'>
					<label>EMAIL</label>
					<TextInput
						textInputType={TextInputType.Text}
						placeholder='Enter email'
						onTextChange={(e) =>
							setRegistrationData({
								...registrationData,
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
							setRegistrationData({
								...registrationData,
								password: e.target.value,
							})
						}
					/>
				</div>

				<div className='form-group mt-4 d-flex justify-content-center'>
					<Button
						buttonText='REGISTRATION'
						buttonColor={ButtonColor.Primary}
						onClick={() => register(registrationData)}
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

Registration.propTypes = {};

export default Registration;
