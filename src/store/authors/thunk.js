import AuthorService from '../../services/authorService';
import { createAuthorsLoaded, createAuthorAdded } from './actionCreators';

const authService = new AuthorService();

export const loadAuthors =
	({ onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		authService.getAll({
			onStarted,
			onSuccess: (resp) => {
				dispatch(createAuthorsLoaded(resp.result));
				if (onSuccess) onSuccess();
			},
			onFail,
		});
	};

export const addAuthor =
	({ data, onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		authService.add({
			data,
			onStarted,
			onSuccess: (resp) => {
				dispatch(createAuthorAdded(resp.result));
				if (onSuccess) onSuccess();
			},
			onFail,
		});
	};
