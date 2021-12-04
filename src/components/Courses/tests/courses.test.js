import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import AppRouter from '../../AppRouter/AppRouter';
import Courses from '../Courses';
import { mockedStore, mockedState, mockedStoreWithoutCourses } from './mocks';

it('should display amount of CourseCard equal length of courses array', () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const { queryAllByTestId } = render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStore}>
			<Courses />
		</Provider>
	);

	const courseCards = queryAllByTestId('course-card');
	const expectedLength = mockedState.coursesState.courses.length;

	expect(courseCards.length).toEqual(expectedLength);
});

it('should display Empty container if courses array length is 0', () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const { queryAllByTestId } = render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStoreWithoutCourses}>
			<Courses />
		</Provider>
	);

	const courseCards = queryAllByTestId('course-card');
	const expectedLength = 0;

	expect(courseCards.length).toEqual(expectedLength);
});

it('CourseFrom should be showed after a click on a button "ADD NEW COURSE"', async () => {
	// eslint-disable-next-line react/jsx-filename-extension
	render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStore}>
			<AppRouter>
				<Courses />
			</AppRouter>
		</Provider>
	);

	const addCourseButton = screen.getByTestId('courses-addnewcoursebtn');
	const courseFromBeforeClick = screen.queryByTestId('coursefrom');

	expect(courseFromBeforeClick).toBeNull();

	fireEvent.click(addCourseButton);

	await waitFor(() => {
		expect(screen.getByTestId('coursefrom')).toBeInTheDocument();
	});
});
