import { combineReducers } from 'redux';
import globalReducer from './global/reducer';
import userReducer from './user/reducer';
import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';

const rootReducer = combineReducers({
	globalState: globalReducer,
	userState: userReducer,
	authorsState: authorsReducer,
	coursesState: coursesReducer,
});

export default rootReducer;
