import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import Header from '../Header';
import { mockedStore, mockedState } from './mocks';

it('Should have logo and users name', () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const { getByTestId } = render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStore}>
			<Header />
		</Provider>
	);

	const logo = getByTestId('logo');
	const userArea = getByTestId('user-area');
	const userName = getByTestId('user-area-username');

	expect(getByTestId('header')).toContainElement(logo);
	expect(getByTestId('header')).toContainElement(userArea);
	expect(getByTestId('user-area')).toContainElement(userName);
	expect(userName).toHaveTextContent(mockedState.userState.user.name);
});
