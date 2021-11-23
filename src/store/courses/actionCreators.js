import courseActionTypes from './actionTypes';

export const setInitialCoursesLoaded = () => ({
	type: courseActionTypes.INITIAL_COURSES_LOADED,
});

export const createCourseRequest = () => ({
	type: courseActionTypes.CREATE_COURSE_REQUEST,
});

export const createCourseSuccess = (course) => ({
	type: courseActionTypes.CREATE_COURSE_SUCCESS,
	payload: course,
});

export const createCourseFail = () => ({
	type: courseActionTypes.CREATE_COURSE_FAIL,
});

export const createLoadCourses = () => ({
	type: courseActionTypes.LOAD_COURSES_REQUEST,
});

export const createLoadCoursesSuccess = (courses) => ({
	type: courseActionTypes.LOAD_COURSES_SUCCESS,
	payload: courses,
});

export const createLoadCoursesFail = () => ({
	type: courseActionTypes.LOAD_COURSES_FAIL,
});

export const deleteCourseRequest = () => ({
	type: courseActionTypes.DELETE_COURSE_REQUEST,
});

export const deleteCourseSuccess = (courseId) => ({
	type: courseActionTypes.DELETE_COURSE_SUCCESS,
	payload: courseId,
});

export const deleteCourseFail = () => ({
	type: courseActionTypes.DELETE_COURSE_FAIL,
});
