import React from 'react';

import Logo from './components/Logo/Logo';
import UserArea from './components/UserArea/UserArea';

const Header = () => (
	<div
		className='navbar navbar-light bg-light'
		style={{ padding: '2px 14px 2px 14px' }}
	>
		<a className='navbar-brand' href='/'>
			<Logo />
		</a>

		<UserArea />
	</div>
);

export default Header;
