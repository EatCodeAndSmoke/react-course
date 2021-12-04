import '@testing-library/jest-dom/extend-expect';

import {
	createCourseAdded,
	createCoursesLoaded,
} from '../courses/actionCreators';
import coursesReducer from '../courses/reducer';

it('should return the initial state', () => {
	const state = coursesReducer(undefined, {});
	expect(state.courses).toEqual([]);
});

it('should handle COURSE_ADDED and returns new state', () => {
	const beforeState = { courses: [] };
	const action = createCourseAdded({ id: 'course_id' });
	const state = coursesReducer(beforeState, action);

	expect(state.courses.length).toEqual(1);
	expect(state.courses[0].id).toEqual('course_id');
});

it('should handle COURSES_LOADED and returns new state', () => {
	const beforeState = { courses: [] };
	const action = createCoursesLoaded([{ id: 'course_id' }]);
	const state = coursesReducer(beforeState, action);

	expect(state.courses.length).toEqual(1);
	expect(state.courses[0].id).toEqual('course_id');
});
