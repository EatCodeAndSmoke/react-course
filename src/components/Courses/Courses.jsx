import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { Button, ButtonColor } from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../constants';
import React, { useState, useContext } from 'react';
import { AppCoursesContext } from '../../contexts/AppCoursesContext';
import { useLoginCheck } from '../hoc/LoginCheckHOC/LoginCheckHOC';

const Courses = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { courses, authors } = useContext(AppCoursesContext);

	const courseList = courses
		.filter(
			(c) =>
				!searchTerm ||
				c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				c.id.includes(searchTerm)
		)
		.map((course) => {
			return {
				...course,
				authors: course.authors.map((authorId) =>
					authors.find((author) => author.id === authorId)
				),
			};
		})
		.map((c) => <CourseCard key={c.id} course={c} />);

	return useLoginCheck(
		<div className='d-flex flex-column'>
			<div className='d-flex justify-content-between mt-3'>
				<SearchBar onTextChange={(e) => setSearchTerm(e.target.value)} />
				<Link to={{ pathname: appRoutes.CREATE_COURSE }}>
					<Button
						buttonColor={ButtonColor.Success}
						outline={false}
						buttonText='ADD NEW COURSE'
					/>
				</Link>
			</div>

			{courseList}
		</div>
	);
};

export default Courses;
