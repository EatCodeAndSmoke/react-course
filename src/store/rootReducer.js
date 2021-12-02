import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';

const rootReducer = combineReducers({
	userState: userReducer,
	authorsState: authorsReducer,
	coursesState: coursesReducer,
});

export default rootReducer;
