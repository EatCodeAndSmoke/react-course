export const appRoutes = {
	HOME: '/',
	COURSES: '/courses',
	CREATE_COURSE: '/courses/add',
	UPDATE_COURSE: '/courses/update/:id',
	GET_UPDATE_COURSE: (id) => `/courses/update/${id}`,
	LOGIN: '/login',
	REGISTRATION: '/registration',
	COURSE_INFO: '/courses/:id',
	GET_COURSE_INFO: (id) => `/courses/${id}`,
};

export const apiRootPath = 'http://localhost:3000';

export const apiPaths = {
	LOGIN: '/login',
	LOGOUT: '/logout',
	REGISTER: '/register',
	ME: '/users/me',

	ALL_COURSES: '/courses/all',
	COURSE_BY_ID: (id) => `/courses/${id}`,
	ADD_COURSE: '/courses/add',
	UPDATE_COURSE: (id) => `/courses/${id}`,
	DELETE_COURSE: (id) => `/courses/${id}`,

	ALL_AUTHORS: '/authors/all',
	ADD_AUTHOR: '/authors/add',
};

export const httpMethods = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};
