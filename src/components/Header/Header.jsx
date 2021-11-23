import React from 'react';
import { useSelector } from 'react-redux';

import Logo from './components/Logo/Logo';
import UserArea from './components/UserArea/UserArea';
import { isAuthenticated } from '../../store/selectors';

const Header = () => {
	const isAuth = useSelector(isAuthenticated);
	const userArea = isAuth ? <UserArea /> : null;

	return (
		<div
			className='navbar navbar-light bg-light'
			style={{ padding: '2px 14px 2px 14px' }}
		>
			<a className='navbar-brand' href='/'>
				<Logo />
			</a>

			<div>{userArea}</div>
		</div>
	);
};

export default Header;
