import { createContext, useState } from 'react';
import { appRoutes } from '../constants';
import { useHistory } from 'react-router';
import {
	sendLoginRequest,
	sendRegisterRequest,
	sendLogoutRequest,
} from '../services/apiService';

const AppUserContext = createContext({});

const AppUserContextProvider = ({ children }) => {
	const history = useHistory();

	const [userData, setUserData] = useState({
		authenticated: localStorage.getItem('auth') || false,
		userName: localStorage.getItem('username'),
	});

	const login = async (loginInput) => {
		var resp = await sendLoginRequest(loginInput);
		if (resp && resp.successful) {
			localStorage.setItem('auth', resp.result);
			localStorage.setItem('username', resp.user.name);
			setUserData({ authenticated: true, userName: resp.user.name });
			history.push(appRoutes.COURSES);
		}
	};

	const register = async (registerInput) => {
		const resp = await sendRegisterRequest(registerInput);
		if (resp && resp.successful) {
			history.push(appRoutes.LOGIN);
		}
	};

	const logOut = async () => {
		const authHeader = localStorage.getItem('auth');
		const resp = await sendLogoutRequest(authHeader);
		if (resp && resp.successful) {
			localStorage.removeItem('auth');
			history.push(appRoutes.LOGIN);
		}
	};

	const contextData = {
		userData: userData,
		login: login,
		register: register,
		logOut: logOut,
	};

	return (
		<AppUserContext.Provider value={contextData}>
			{children}
		</AppUserContext.Provider>
	);
};

export { AppUserContext, AppUserContextProvider };
