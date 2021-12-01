import CourseService from '../../services/courseService';
import { processAxiosResponse } from '../sharedThunk';
import {
	createCourseAdded,
	createCourseUpdated,
	createCourseDeleted,
	createCoursesLoaded,
} from './actionCreators';

const courseService = new CourseService();

export const addCourse =
	({ course, onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		const addResp = await courseService.add(course);

		const data = {
			resp: addResp,
			onStarted,
			onSuccess: () => {
				dispatch(createCourseAdded(course));
				if (onSuccess) onSuccess();
			},
			onFail,
		};

		await processAxiosResponse(data);
	};

export const updateCourse =
	({ course, onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		const updateResp = await courseService.update(course);

		const data = {
			resp: updateResp,
			onStarted,
			onSuccess: () => {
				dispatch(createCourseUpdated(course));
				if (onSuccess) onSuccess();
			},
			onFail,
		};

		await processAxiosResponse(data);
	};

export const deleteCourse =
	({ courseId, onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		const deleteResp = await courseService.delete(courseId);

		const data = {
			resp: deleteResp,
			onStarted,
			onSuccess: () => {
				dispatch(createCourseDeleted(courseId));
				if (onSuccess) onSuccess();
			},
			onFail,
		};

		await processAxiosResponse(data);
	};

export const loadCourses =
	({ onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		const getAllResp = await courseService.getAll();

		const data = {
			resp: getAllResp,
			onStarted,
			onSuccess: (resp) => {
				dispatch(createCoursesLoaded(resp.result));
				if (onSuccess) onSuccess();
			},
			onFail,
		};

		await processAxiosResponse(data);
	};
