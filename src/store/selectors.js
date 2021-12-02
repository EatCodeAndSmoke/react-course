export const getCourses = (state) => state.coursesState.courses;

export const getAuthors = (state) => state.authorsState.authors;

export const getUserData = (state) => state.userState.user;
export const isAuthenticated = (state) => getUserData(state).isAuth;
export const getUserRole = (state) => getUserData(state).role;
export const isAdmin = (state) => getUserRole(state) === 'admin';
