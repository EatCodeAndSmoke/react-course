export const mockedState = {
	userState: {
		user: {
			isAuth: true,
			name: 'Test Name',
		},
	},

	courses: [],
	authors: [],
};

export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
