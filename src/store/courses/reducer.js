import courseActionTypes from './actionTypes';

const initialState = {
	courses: [],
};

const coursesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case courseActionTypes.COURSES_LOADED:
			return {
				...state,
				courses: [...payload],
			};

		case courseActionTypes.COURSE_ADDED:
			return {
				...state,
				courses: [...state.courses, payload],
			};

		case courseActionTypes.COURSE_UPDATED:
			return {
				...state,
				courses: [...state.courses.filter((c) => c.id !== payload.id), payload],
			};

		case courseActionTypes.COURSE_DELETED:
			return {
				...state,
				courses: [...state.courses.filter((c) => c.id !== payload)],
			};

		default:
			return state;
	}
};

export default coursesReducer;
