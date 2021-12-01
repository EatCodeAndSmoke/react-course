import AuthorService from '../../services/authorService';
import { createAuthorsLoaded, createAuthorAdded } from './actionCreators';
import { processAxiosResponse } from '../sharedThunk';

const authService = new AuthorService();

export const loadAuthors =
	({ onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		const getAllResp = await authService.getAll();

		const data = {
			resp: getAllResp,
			onStarted,
			onSuccess: (resp) => {
				dispatch(createAuthorsLoaded(resp.result));
				if (onSuccess) onSuccess();
			},
			onFail,
		};

		await processAxiosResponse(data);
	};

export const addAuthor =
	({ author, onStarted, onSuccess, onFail }) =>
	async (dispatch) => {
		const addResp = await authService.add(author);

		const data = {
			resp: addResp,
			onStarted,
			onSuccess: () => {
				dispatch(createAuthorAdded(author));
				if (onSuccess) onSuccess();
			},
			onFail,
		};

		await processAxiosResponse(data);
	};
