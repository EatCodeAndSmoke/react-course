import React from 'react';
import logoImg from '../../../../assets/img/logo.png';

const Logo = () => (
	<img data-testid='logo' width={200} height={80} src={logoImg} alt='logo' />
);

export default Logo;
