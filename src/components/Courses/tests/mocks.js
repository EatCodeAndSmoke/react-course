export const mockedState = {
	userState: {
		user: {
			isAuth: true,
			name: 'Test Name',
			role: 'admin',
		},
	},

	coursesState: {
		courses: [
			{
				id: 'course_id',
				title: 'course title',
				description: 'course descrip',
				duration: 10,
				authors: ['auth_id'],
				creationDate: new Date().toString(),
			},
		],
	},

	authorsState: { authors: [{ id: 'auth_id', name: 'author name' }] },
};

export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

export const mockedStateWithoutCourses = {
	userState: {
		user: {
			isAuth: true,
			name: 'Test Name',
		},
	},

	coursesState: {
		courses: [],
	},

	authorsState: { authors: [] },
};

export const mockedStoreWithoutCourses = {
	getState: () => mockedStateWithoutCourses,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
