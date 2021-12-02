import courseActionTypes from './actionTypes';

export const createCoursesLoaded = (courses) => ({
	type: courseActionTypes.COURSES_LOADED,
	payload: courses,
});

export const createCourseAdded = (course) => ({
	type: courseActionTypes.COURSE_ADDED,
	payload: course,
});

export const createCourseUpdated = (course) => ({
	type: courseActionTypes.COURSE_UPDATED,
	payload: course,
});

export const createCourseDeleted = (courseId) => ({
	type: courseActionTypes.COURSE_DELETED,
	payload: courseId,
});
