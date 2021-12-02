import CourseService from '../../services/courseService';
import {
	createCourseAdded,
	createCourseUpdated,
	createCourseDeleted,
	createCoursesLoaded,
} from './actionCreators';

const courseService = new CourseService();

export const addCourse =
	({ data, onStarted, onSuccess, onFail }) =>
	async (dispatch) =>
		courseService.add({
			data,
			onStarted,
			onSuccess: (resp) => {
				dispatch(createCourseAdded(resp.result));
				if (onSuccess) onSuccess();
			},
			onFail,
		});

export const updateCourse =
	({ data, onStarted, onSuccess, onFail }) =>
	async (dispatch) =>
		courseService.update({
			data,
			onStarted,
			onSuccess: () => {
				dispatch(createCourseUpdated(data));
				if (onSuccess) onSuccess();
			},
			onFail,
		});

export const deleteCourse =
	({ data, onStarted, onSuccess, onFail }) =>
	async (dispatch) =>
		courseService.delete({
			data,
			onStarted,
			onSuccess: () => {
				dispatch(createCourseDeleted(data));
				if (onSuccess) onSuccess();
			},
			onFail,
		});

export const loadCourses =
	({ onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		courseService.getAll({
			onStarted,
			onSuccess: (resp) => {
				dispatch(createCoursesLoaded(resp.result));
				if (onSuccess) onSuccess();
			},
			onFail,
		});
	};
