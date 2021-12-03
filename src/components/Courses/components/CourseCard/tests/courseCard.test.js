import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import CourseCard from '../CourseCard';
import { mockedStore, mockedState } from './mocks';
import getDurationText from '../../../../../helpers/pipeDuration';

it('Should display title', () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const { getByTestId } = render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStore}>
			<CourseCard course={mockedState.coursesState.courses[0]} />
		</Provider>
	);

	const courseCard = getByTestId('course-card');
	const courseTitle = getByTestId('course-title');

	expect(courseCard).toContainElement(courseTitle);
	expect(courseTitle).toHaveTextContent(
		mockedState.coursesState.courses[0].title
	);
});

it('Should display description', () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const { getByTestId } = render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStore}>
			<CourseCard course={mockedState.coursesState.courses[0]} />
		</Provider>
	);

	const courseCard = getByTestId('course-card');
	const courseDescrip = getByTestId('course-descrip');

	expect(courseCard).toContainElement(courseDescrip);
	expect(courseDescrip).toHaveTextContent(
		mockedState.coursesState.courses[0].description
	);
});

it('Should display duration in correct format', () => {
	// eslint-disable-next-line react/jsx-filename-extension
	const { getByTestId } = render(
		// eslint-disable-next-line react/jsx-filename-extension
		<Provider store={mockedStore}>
			<CourseCard course={mockedState.coursesState.courses[0]} />
		</Provider>
	);

	const courseCard = getByTestId('course-card');
	const courseDur = getByTestId('course-duration');
	const correctDuration = getDurationText(
		mockedState.coursesState.courses[0].duration
	);

	expect(courseCard).toContainElement(courseDur);
	expect(courseDur).toHaveTextContent(correctDuration);
});

it('Should display authors list', () => {});
