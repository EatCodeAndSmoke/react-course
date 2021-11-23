// course
export const isInitialCoursesLoaded = (state) =>
	state.coursesState.initialCoursesLoaded;
export const isCreateCourseRequested = (state) =>
	state.coursesState.createCourseRequested;
export const isUpdateCourseRequested = (state) =>
	state.coursesState.updateCourseRequested;
export const isDeleteCourseRequested = (state) =>
	state.coursesState.deleteCourseRequested;
export const getCourses = (state) => state.coursesState.courses;

// author
export const isInitialAuthorsLoaded = (state) =>
	state.authorsState.initialAuthorsLoaded;
export const isCreateAuthorRequested = (state) =>
	state.authorsState.createAuthorRequested;
export const getAuthors = (state) => state.authorsState.authors;

// user
export const getUserData = (state) => state.userState.user;
export const isAuthenticated = (state) => getUserData(state).isAuth;
export const isLoginRequested = (state) => state.userState.loginRequested;
export const isLogoutRequested = (state) => state.userState.logoutRequested;
export const isRegistrationRequested = (state) =>
	state.userState.registerUserRequested;

// global
export const getErrorMessage = (state) => state.globalState.errorMessage;
export const getSuccessMessage = (state) => state.globalState.successMessage;
