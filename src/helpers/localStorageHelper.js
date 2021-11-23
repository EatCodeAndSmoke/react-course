export const readUserData = () => {
	const name = localStorage.getItem('userName');
	const email = localStorage.getItem('userEmail');
	const token = localStorage.getItem('jwtToken');

	return {
		isAuth: token || false,
		name,
		email,
		token,
	};
};

export const setUserData = (userData) => {
	localStorage.setItem('userName', userData.name);
	localStorage.setItem('userEmail', userData.email);
	localStorage.setItem('jwtToken', userData.token);
};

export const clearUserData = () => {
	localStorage.removeItem('userName');
	localStorage.removeItem('userEmail');
	localStorage.removeItem('jwtToken');
};
