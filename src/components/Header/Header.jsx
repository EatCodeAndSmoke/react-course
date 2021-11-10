import Logo from './components/Logo/Logo';
import UserArea from './components/UserArea/UserArea';

function Header() {
	return (
		<div
			className={'navbar navbar-light bg-light'}
			style={{ padding: '2px 14px 2px 14px' }}
		>
			<a className={'navbar-brand'} href='/'>
				<Logo />
			</a>

			<div>
				<UserArea />
			</div>
		</div>
	);
}

export default Header;
