import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import CourseCard from '../CourseCard';
import { mockedStore, mockedState } from './mocks';
import getDurationText from '../../../../../helpers/pipeDuration';
import getCourseAuthorNames from '../../../../../helpers/courseHelpers';

it('Should display title', () => {
	const course = mockedState.coursesState.courses[0];

	// eslint-disable-next-line react/jsx-filename-extension
	const { getByTestId } = render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStore}>
			<CourseCard course={course} />
		</Provider>
	);

	const courseCard = getByTestId('course-card');
	const courseTitle = getByTestId('course-card-title');

	expect(courseCard).toContainElement(courseTitle);
	expect(courseTitle).toHaveTextContent(course.title);
});

it('Should display description', () => {
	const course = mockedState.coursesState.courses[0];

	// eslint-disable-next-line react/jsx-filename-extension
	const { getByTestId } = render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStore}>
			<CourseCard course={course} />
		</Provider>
	);

	const courseCard = getByTestId('course-card');
	const courseDescrip = getByTestId('course-card-descrip');

	expect(courseCard).toContainElement(courseDescrip);
	expect(courseDescrip).toHaveTextContent(course.description);
});

it('Should display duration in correct format', () => {
	const course = mockedState.coursesState.courses[0];

	// eslint-disable-next-line react/jsx-filename-extension
	const { getByTestId } = render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStore}>
			<CourseCard course={course} />
		</Provider>
	);

	const courseCard = getByTestId('course-card');
	const courseDur = getByTestId('course-card-duration');
	const correctDuration = getDurationText(course.duration);

	expect(courseCard).toContainElement(courseDur);
	expect(courseDur).toHaveTextContent(correctDuration);
});

it('Should display authors list', () => {
	const course = mockedState.coursesState.courses[0];
	const { authors } = mockedState.authorsState;
	const authorNames = getCourseAuthorNames(course, authors);

	// eslint-disable-next-line react/jsx-filename-extension
	const { getByTestId } = render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStore}>
			<CourseCard course={course} />
		</Provider>
	);

	const courseCard = getByTestId('course-card');
	const authorsEl = getByTestId('course-card-authors');

	expect(courseCard).toContainElement(authorsEl);
	expect(authorsEl).toHaveTextContent(authorNames);
});
