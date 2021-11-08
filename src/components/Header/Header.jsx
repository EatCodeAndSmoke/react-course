import Logo from './components/Logo/Logo';
import UserArea from './components/UserArea/UserArea';
import { AppUserContext } from '../../contexts/AppUserContext';
import { useContext } from 'react';

function Header() {
	const { userData } = useContext(AppUserContext);
	const userArea = userData.authenticated ? <UserArea /> : null;

	return (
		<div
			className={'navbar navbar-light bg-light'}
			style={{ padding: '2px 14px 2px 14px' }}
		>
			<a className={'navbar-brand'} href='/'>
				<Logo />
			</a>

			<div>{userArea}</div>
		</div>
	);
}

export default Header;
