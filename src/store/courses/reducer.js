import courseActionTypes from './actionTypes';

const initialState = {
	courses: [],
	createCourseRequested: false,
	updateCourseRequested: false,
	deleteCourseRequested: false,
	loadCoursesRequested: false,
	initialCoursesLoaded: false,
};

const coursesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case courseActionTypes.INITIAL_COURSES_LOADED:
			return {
				...state,
				initialCoursesLoaded: true,
			};

		case courseActionTypes.CREATE_COURSE_REQUEST:
			return {
				...state,
				createCourseRequested: true,
			};

		case courseActionTypes.CREATE_COURSE_SUCCESS:
			return {
				...state,
				createCourseRequested: false,
				courses: [...state.courses, payload],
			};

		case courseActionTypes.CREATE_COURSE_FAIL:
			return {
				...state,
				createCourseRequested: false,
			};

		case courseActionTypes.LOAD_COURSES_REQUEST:
			return {
				...state,
				loadCoursesRequested: true,
			};

		case courseActionTypes.LOAD_COURSES_SUCCESS:
			return {
				...state,
				loadCoursesRequested: false,
				courses: [...payload],
			};

		case courseActionTypes.LOAD_COURSES_FAIL:
			return {
				...state,
				loadCoursesRequested: false,
			};

		case courseActionTypes.DELETE_COURSE_REQUEST:
			return {
				...state,
				deleteCourseRequested: true,
			};

		case courseActionTypes.DELETE_COURSE_SUCCESS:
			return {
				...state,
				deleteCourseRequested: false,
				courses: state.courses.filter((c) => c.id !== payload),
			};

		case courseActionTypes.DELETE_COURSE_FAIL:
			return {
				...state,
				deleteCourseRequested: false,
			};

		default:
			return state;
	}
};

export default coursesReducer;
