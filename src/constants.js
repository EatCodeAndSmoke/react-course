export const appRoutes = {
	HOME: '/',
	COURSES: '/courses',
	CREATE_COURSE: '/courses/add',
	LOGIN: '/login',
	REGISTRATION: '/registration',
	COURSE_INFO: '/courses/:id',
};

export const apiRootPath = 'http://localhost:3000';

export const apiPaths = {
	LOGIN: `${apiRootPath}/login`,
	LOGOUT: `${apiRootPath}/logout`,
	REGISTER: `${apiRootPath}/register`,
	GET_ALL_COURSES: `${apiRootPath}/courses/all`,
	GET_ALL_AUTHORS: `${apiRootPath}/authors/all`,
};

export const httpMethods = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};
