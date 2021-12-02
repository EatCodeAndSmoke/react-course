import BaseService from './baseService';
import { apiPaths } from '../constants';

class CourseService extends BaseService {
	getAll = async ({ onStarted, onSuccess, onFail }) =>
		this.GET({
			onStarted,
			onSuccess,
			onFail,
			url: apiPaths.ALL_COURSES,
		});

	getById = async ({ data, onStarted, onSuccess, onFail }) =>
		this.GET({
			onStarted,
			onSuccess,
			onFail,
			url: apiPaths.COURSE_BY_ID(data),
		});

	add = async ({ data, onStarted, onSuccess, onFail }) =>
		this.POST({
			onStarted,
			onSuccess,
			onFail,
			data,
			url: apiPaths.ADD_COURSE,
		});

	update = async ({ data, onStarted, onSuccess, onFail }) =>
		this.PUT({
			onStarted,
			onSuccess,
			onFail,
			data,
			url: apiPaths.UPDATE_COURSE(data.id),
		});

	delete = async ({ data, onStarted, onSuccess, onFail }) =>
		this.DELETE({
			onStarted,
			onSuccess,
			onFail,
			url: apiPaths.DELETE_COURSE(data),
		});
}

export default CourseService;
