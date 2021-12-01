import BaseService from './baseService';
import { apiPaths } from '../constants';

class CourseService extends BaseService {
	getAll = async () => {
		const resp = await this.GET({
			url: apiPaths.ALL_COURSES,
		});

		return resp;
	};

	getById = async (courseId) => {
		const resp = await this.GET({
			url: apiPaths.COURSE_BY_ID(courseId),
		});

		return resp;
	};

	add = async (course) => {
		const resp = await this.POST({
			url: apiPaths.ADD_COURSE,
			data: course,
		});

		return resp;
	};

	update = async (course) => {
		const resp = await this.PUT({
			url: apiPaths.UPDATE_COURSE(course.id),
			data: course,
		});

		return resp;
	};

	delete = async (courseId) => {
		const resp = await this.DELETE({
			url: apiPaths.DELETE_COURSE(courseId),
		});

		return resp;
	};
}

export default CourseService;
